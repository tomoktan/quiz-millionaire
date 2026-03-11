import { getDb } from "./db";
import { Question, Difficulty } from "@/app/types";

interface QuestionRow {
  id: number;
  question: string;
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
  correct_index: number;
  difficulty: string;
}

async function getRandomQuestions(
  difficulty: Difficulty,
  count: number,
): Promise<Question[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM questions
    WHERE difficulty = ${difficulty}
    ORDER BY RANDOM()
    LIMIT ${count}
  `;

  return (rows as unknown as QuestionRow[]).map((row) => ({
    id: row.id,
    question: row.question,
    answers: [row.answer_a, row.answer_b, row.answer_c, row.answer_d],
    correctIndex: row.correct_index,
    difficulty: row.difficulty as Difficulty,
  }));
}

export async function generateQuestionSet(): Promise<Question[]> {
  const [easy, medium, hard] = await Promise.all([
    getRandomQuestions("easy", 5),
    getRandomQuestions("medium", 5),
    getRandomQuestions("hard", 5),
  ]);
  return [...easy, ...medium, ...hard];
}
