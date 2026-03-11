interface ResultScreenProps {
  isCleared: boolean;
  isDropout: boolean;
  currentPrize: string;
  guaranteedPrize: string;
  onRestart: () => void;
  selectedAnswer: number | null;
  correctIndex: number | undefined;
}

function ResultScreen({
  isCleared,
  isDropout,
  currentPrize,
  guaranteedPrize,
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
            <h2 className="result-title cleared">全問正解！</h2>
            <p className="result-message">おめでとうございます！</p>
          </>
        ) : isWrong ? (
          <>
            <h2 className="result-title gameover">残念...</h2>
            <p className="result-message">不正解です</p>
          </>
        ) : (
          <>
            <h2 className="result-title dropout">ドロップアウト</h2>
            <p className="result-message">賞金を確定しました</p>
          </>
        )}
        <div className="result-prize">
          <span className="result-prize-label">獲得賞金</span>
          <span className="result-prize-amount">{prize}</span>
        </div>
        <button className="restart-button" onClick={onRestart}>
          もう一度プレイ
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
