interface StartScreenProps {
  onStart: () => void;
  isLoading: boolean;
}

function StartScreen({ onStart, isLoading }: StartScreenProps) {
  return (
    <div className="start-screen">
      <div className="start-logo">
        <h1 className="start-title">クイズ</h1>
        <h2 className="start-subtitle">ミリオネア</h2>
      </div>
      <p className="start-description">
        全15問の4択クイズに挑戦！
        <br />
        全問正解で賞金1000万円を目指そう！
      </p>
      <button className="start-button" onClick={onStart} disabled={isLoading}>
        {isLoading ? "読み込み中..." : "ゲームスタート"}
      </button>
    </div>
  );
}

export default StartScreen;
