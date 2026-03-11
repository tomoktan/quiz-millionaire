import { NextResponse } from "next/server";
import { generateQuestionSet } from "@/lib/questions";

export async function GET() {
  try {
    const questions = await generateQuestionSet();
    return NextResponse.json(questions);
  } catch (error) {
    console.error("問題取得エラー:", error);
    return NextResponse.json(
      { error: "問題の取得に失敗しました" },
      { status: 500 },
    );
  }
}
