import { NextResponse } from "next/server";
import { generateQuestionSet } from "@/lib/questions";

export async function GET() {
  try {
    const questions = await generateQuestionSet();
    return NextResponse.json(questions);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : undefined;
    console.error("問題取得エラー:", message, stack);
    return NextResponse.json(
      { error: "問題の取得に失敗しました", detail: message },
      { status: 500 },
    );
  }
}
