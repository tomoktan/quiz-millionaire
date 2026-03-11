import { Lang } from "../types";

interface ResultPopupProps {
  isCorrect: boolean;
  correctAnswer: string;
  prizeName: string;
  questionNumber: number;
  lang: Lang;
  onNext: () => void;
}

const CORRECT_MESSAGES_JA = [
  "素晴らしい！",
  "お見事！",
  "完璧です！",
  "その通り！",
  "正解です！",
];

const CORRECT_MESSAGES_EN = [
  "Brilliant!",
  "Well done!",
  "Perfect!",
  "That's right!",
  "Correct!",
];

const WRONG_MESSAGES_JA = [
  "残念...",
  "惜しい！",
  "ここで終了...",
  "不正解...",
  "ゲームオーバー...",
];

const WRONG_MESSAGES_EN = [
  "Too bad...",
  "So close!",
  "It's over...",
  "Incorrect...",
  "Game over...",
];

function ResultPopup({
  isCorrect,
  correctAnswer,
  prizeName,
  questionNumber,
  lang,
  onNext,
}: ResultPopupProps) {
  const messages = isCorrect
    ? lang === "ja"
      ? CORRECT_MESSAGES_JA
      : CORRECT_MESSAGES_EN
    : lang === "ja"
      ? WRONG_MESSAGES_JA
      : WRONG_MESSAGES_EN;
  const message = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="result-popup-overlay" onClick={onNext}>
      <div
        className={`result-popup ${isCorrect ? "result-popup-correct" : "result-popup-wrong"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`result-popup-icon ${isCorrect ? "correct" : "wrong"}`}>
          {isCorrect ? "○" : "×"}
        </div>
        <p className="result-popup-message">{message}</p>
        {isCorrect ? (
          <p className="result-popup-detail">
            Q{questionNumber} {lang === "ja" ? "クリア！" : "Cleared!"}
            <br />
            <span className="result-popup-prize">
              {lang === "ja" ? "獲得賞金" : "Prize"}: {prizeName}
            </span>
          </p>
        ) : (
          <p className="result-popup-detail">
            {lang === "ja"
              ? `正解は「${correctAnswer}」でした`
              : `The correct answer was "${correctAnswer}"`}
            <br />
            <span className="result-popup-prize">
              {lang === "ja" ? "確定賞金" : "Guaranteed"}: {prizeName}
            </span>
          </p>
        )}
        <button
          className={`result-popup-button ${isCorrect ? "correct" : "wrong"}`}
          onClick={onNext}
        >
          {isCorrect
            ? lang === "ja"
              ? "次の問題へ"
              : "Next Question"
            : lang === "ja"
              ? "結果を見る"
              : "See Results"}
        </button>
      </div>
    </div>
  );
}

export default ResultPopup;
