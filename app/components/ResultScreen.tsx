import { Lang } from "../types";

interface ResultScreenProps {
  isCleared: boolean;
  isDropout: boolean;
  currentPrize: string;
  guaranteedPrize: string;
  lang: Lang;
  onRestart: () => void;
  selectedAnswer: number | null;
  correctIndex: number | undefined;
}

function ResultScreen({
  isCleared,
  isDropout,
  currentPrize,
  guaranteedPrize,
  lang,
  onRestart,
  selectedAnswer,
  correctIndex,
}: ResultScreenProps) {
  const isWrong = selectedAnswer !== null && selectedAnswer !== correctIndex;
  const prize = isCleared
    ? "1000万円"
    : isDropout
      ? currentPrize
      : guaranteedPrize;

  return (
    <div className="result-screen">
      <div className="result-content">
        {isCleared ? (
          <>
            <h2 className="result-title cleared">
              {lang === "ja" ? "全問正解！" : "All Correct!"}
            </h2>
            <p className="result-message">
              {lang === "ja" ? "おめでとうございます！" : "Congratulations!"}
            </p>
          </>
        ) : isWrong ? (
          <>
            <h2 className="result-title gameover">
              {lang === "ja" ? "残念..." : "Too bad..."}
            </h2>
            <p className="result-message">
              {lang === "ja" ? "不正解です" : "Incorrect answer"}
            </p>
          </>
        ) : (
          <>
            <h2 className="result-title dropout">
              {lang === "ja" ? "ドロップアウト" : "Drop Out"}
            </h2>
            <p className="result-message">
              {lang === "ja" ? "賞金を確定しました" : "You secured your prize"}
            </p>
          </>
        )}
        <div className="result-prize">
          <span className="result-prize-label">
            {lang === "ja" ? "獲得賞金" : "Prize Won"}
          </span>
          <span className="result-prize-amount">{prize}</span>
        </div>
        <button className="restart-button" onClick={onRestart}>
          {lang === "ja" ? "もう一度プレイ" : "Play Again"}
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
