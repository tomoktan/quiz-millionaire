import { getDb } from "./db";
import { Question, Difficulty } from "@/app/types";

interface QuestionRow {
  id: number;
  question_ja: string;
  question_en: string;
  answer_a_ja: string;
  answer_a_en: string;
  answer_b_ja: string;
  answer_b_en: string;
  answer_c_ja: string;
  answer_c_en: string;
  answer_d_ja: string;
  answer_d_en: string;
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
    question_ja: row.question_ja,
    question_en: row.question_en,
    answers_ja: [
      row.answer_a_ja,
      row.answer_b_ja,
      row.answer_c_ja,
      row.answer_d_ja,
    ],
    answers_en: [
      row.answer_a_en,
      row.answer_b_en,
      row.answer_c_en,
      row.answer_d_en,
    ],
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
