import { neon } from "@neondatabase/serverless";
import { questions } from "./questions-data";

async function seed() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error(
      "DATABASE_URL が設定されていません。.env.local を確認してください。",
    );
    process.exit(1);
  }

  const sql = neon(databaseUrl);

  console.log("テーブルを作成中...");
  await sql`
    CREATE TABLE IF NOT EXISTS questions (
      id SERIAL PRIMARY KEY,
      question TEXT NOT NULL,
      answer_a TEXT NOT NULL,
      answer_b TEXT NOT NULL,
      answer_c TEXT NOT NULL,
      answer_d TEXT NOT NULL,
      correct_index INTEGER NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
      difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard'))
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS idx_difficulty ON questions(difficulty)`;

  // 既存データを削除
  await sql`TRUNCATE TABLE questions RESTART IDENTITY`;

  console.log(`${questions.length}問を投入中...`);

  // バッチで投入（50問ずつ）
  for (let i = 0; i < questions.length; i += 50) {
    const batch = questions.slice(i, i + 50);
    for (const q of batch) {
      await sql`
        INSERT INTO questions (question, answer_a, answer_b, answer_c, answer_d, correct_index, difficulty)
        VALUES (${q.question}, ${q.answers[0]}, ${q.answers[1]}, ${q.answers[2]}, ${q.answers[3]}, ${q.correctIndex}, ${q.difficulty})
      `;
    }
    console.log(
      `  ${Math.min(i + 50, questions.length)}/${questions.length} 完了`,
    );
  }

  console.log("シード完了！");
}

seed().catch((err) => {
  console.error("シードエラー:", err);
  process.exit(1);
});
