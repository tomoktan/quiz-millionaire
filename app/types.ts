export type Difficulty = "easy" | "medium" | "hard";
export type Lang = "ja" | "en";

export interface Question {
  id: number;
  question_ja: string;
  question_en: string;
  answers_ja: string[];
  answers_en: string[];
  correctIndex: number;
  difficulty: Difficulty;
}

export interface PrizeLevel {
  amount: string;
  value: number;
  isSafetyNet: boolean;
}

export type GameStatus = "start" | "playing" | "gameover" | "cleared";

export type LifelineType = "fiftyFifty" | "audience" | "phone";

export interface GameState {
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  isAnswerRevealed: boolean;
  usedLifelines: Record<LifelineType, boolean>;
  eliminatedAnswers: number[];
  audienceResults: number[] | null;
  phoneHint: string | null;
  gameStatus: GameStatus;
  showFinalAnswer: boolean;
  isLoading: boolean;
}
