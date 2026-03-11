import { readFileSync } from "fs";
import { resolve } from "path";
import { neon } from "@neondatabase/serverless";
import { questions } from "./questions-data";

// .env.local から環境変数を読み込む
const envPath = resolve(process.cwd(), ".env.local");
try {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed
      .slice(eqIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
} catch {
  // .env.local が存在しない場合は無視
}

async function seed() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error(
      "DATABASE_URL が設定されていません。.env.local を確認してください。",
    );
    process.exit(1);
  }

  const sql = neon(databaseUrl);

  console.log("既存テーブルを削除中...");
  await sql`DROP TABLE IF EXISTS questions`;

  console.log("テーブルを作成中...");
  await sql`
    CREATE TABLE IF NOT EXISTS questions (
      id SERIAL PRIMARY KEY,
      question_ja TEXT NOT NULL,
      answer_a_ja TEXT NOT NULL,
      answer_b_ja TEXT NOT NULL,
      answer_c_ja TEXT NOT NULL,
      answer_d_ja TEXT NOT NULL,
      question_en TEXT NOT NULL,
      answer_a_en TEXT NOT NULL,
      answer_b_en TEXT NOT NULL,
      answer_c_en TEXT NOT NULL,
      answer_d_en TEXT NOT NULL,
      correct_index INTEGER NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
      difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
      CONSTRAINT uq_question_en UNIQUE (question_en)
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS idx_difficulty ON questions(difficulty)`;

  console.log(`${questions.length}問を投入中...`);

  // バッチで投入（50問ずつ）
  for (let i = 0; i < questions.length; i += 50) {
    const batch = questions.slice(i, i + 50);
    for (const q of batch) {
      await sql`
        INSERT INTO questions (
          question_ja, answer_a_ja, answer_b_ja, answer_c_ja, answer_d_ja,
          question_en, answer_a_en, answer_b_en, answer_c_en, answer_d_en,
          correct_index, difficulty
        ) VALUES (
          ${q.question_ja}, ${q.answers_ja[0]}, ${q.answers_ja[1]}, ${q.answers_ja[2]}, ${q.answers_ja[3]},
          ${q.question_en}, ${q.answers_en[0]}, ${q.answers_en[1]}, ${q.answers_en[2]}, ${q.answers_en[3]},
          ${q.correctIndex}, ${q.difficulty}
        )
        ON CONFLICT (question_en) DO NOTHING
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
