interface ResultPopupProps {
  isCorrect: boolean;
  correctAnswer: string;
  prizeName: string;
  questionNumber: number;
  onNext: () => void;
}

const CORRECT_MESSAGES = [
  "素晴らしい！",
  "お見事！",
  "完璧です！",
  "その通り！",
  "正解です！",
];

const WRONG_MESSAGES = [
  "残念...",
  "惜しい！",
  "ここで終了...",
  "不正解...",
  "ゲームオーバー...",
];

function ResultPopup({
  isCorrect,
  correctAnswer,
  prizeName,
  questionNumber,
  onNext,
}: ResultPopupProps) {
  const messages = isCorrect ? CORRECT_MESSAGES : WRONG_MESSAGES;
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
            Q{questionNumber} クリア！
            <br />
            <span className="result-popup-prize">獲得賞金: {prizeName}</span>
          </p>
        ) : (
          <p className="result-popup-detail">
            正解は「{correctAnswer}」でした
            <br />
            <span className="result-popup-prize">確定賞金: {prizeName}</span>
          </p>
        )}
        <button
          className={`result-popup-button ${isCorrect ? "correct" : "wrong"}`}
          onClick={onNext}
        >
          {isCorrect ? "次の問題へ" : "結果を見る"}
        </button>
      </div>
    </div>
  );
}

export default ResultPopup;
