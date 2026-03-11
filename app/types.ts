export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: number;
  question: string;
  answers: string[];
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
