"use client";

import { useState, useCallback } from "react";
import { useGame } from "../hooks/useGame";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import PrizeTable from "./PrizeTable";
import Lifelines from "./Lifelines";
import AudienceChart from "./AudienceChart";
import PhoneHint from "./PhoneHint";
import ResultScreen from "./ResultScreen";

function App() {
  const game = useGame();
  const [showAudience, setShowAudience] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [dropoutConfirm, setDropoutConfirm] = useState(false);

  const handleUseLifeline = useCallback(
    (type: "fiftyFifty" | "audience" | "phone") => {
      game.useLifeline(type);
      if (type === "audience") setShowAudience(true);
      if (type === "phone") setShowPhone(true);
    },
    [game],
  );

  if (game.gameStatus === "start") {
    return <StartScreen onStart={game.startGame} isLoading={game.isLoading} />;
  }

  if (game.gameStatus === "gameover" || game.gameStatus === "cleared") {
    const isDropout =
      game.gameStatus === "gameover" && game.selectedAnswer === null;
    return (
      <ResultScreen
        isCleared={game.gameStatus === "cleared"}
        isDropout={isDropout}
        currentPrize={game.currentPrize}
        guaranteedPrize={game.guaranteedPrize}
        onRestart={game.resetGame}
        selectedAnswer={game.selectedAnswer}
        correctIndex={game.currentQuestion?.correctIndex}
      />
    );
  }

  return (
    <div className="game-screen">
      <div className="game-main">
        <div className="game-header">
          <Lifelines
            usedLifelines={game.usedLifelines}
            onUseLifeline={handleUseLifeline}
            disabled={game.selectedAnswer !== null || game.isAnswerRevealed}
          />
          <div className="game-actions">
            {!game.isAnswerRevealed && game.selectedAnswer === null && (
              <button
                className="dropout-button"
                onClick={() => setDropoutConfirm(true)}
              >
                ドロップアウト
              </button>
            )}
          </div>
        </div>

        {game.currentQuestion && (
          <QuestionCard
            question={game.currentQuestion}
            questionNumber={game.currentQuestionIndex + 1}
            selectedAnswer={game.selectedAnswer}
            isAnswerRevealed={game.isAnswerRevealed}
            eliminatedAnswers={game.eliminatedAnswers}
            onSelectAnswer={game.selectAnswer}
          />
        )}

        {game.showFinalAnswer && (
          <div className="final-answer-overlay">
            <div className="final-answer-dialog">
              <p className="final-answer-text">ファイナルアンサー？</p>
              <div className="final-answer-buttons">
                <button
                  className="final-answer-yes"
                  onClick={game.confirmFinalAnswer}
                >
                  ファイナルアンサー
                </button>
                <button
                  className="final-answer-no"
                  onClick={game.cancelFinalAnswer}
                >
                  やめる
                </button>
              </div>
            </div>
          </div>
        )}

        {game.isAnswerRevealed && (
          <div className="next-action">
            <button className="next-button" onClick={game.nextQuestion}>
              {game.selectedAnswer === game.currentQuestion?.correctIndex
                ? "次の問題へ"
                : "結果を見る"}
            </button>
          </div>
        )}
      </div>

      <PrizeTable currentQuestionIndex={game.currentQuestionIndex} />

      {showAudience && game.audienceResults && (
        <AudienceChart
          results={game.audienceResults}
          onClose={() => setShowAudience(false)}
        />
      )}

      {showPhone && game.phoneHint && (
        <PhoneHint hint={game.phoneHint} onClose={() => setShowPhone(false)} />
      )}

      {dropoutConfirm && (
        <div
          className="final-answer-overlay"
          onClick={() => setDropoutConfirm(false)}
        >
          <div
            className="final-answer-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="final-answer-text">
              ドロップアウトしますか？
              <br />
              <span className="dropout-prize">
                獲得賞金: {game.currentPrize}
              </span>
            </p>
            <div className="final-answer-buttons">
              <button
                className="final-answer-yes"
                onClick={() => {
                  setDropoutConfirm(false);
                  game.dropout();
                }}
              >
                ドロップアウト
              </button>
              <button
                className="final-answer-no"
                onClick={() => setDropoutConfirm(false)}
              >
                続ける
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
