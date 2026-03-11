"use client";

import { useState, useCallback } from "react";
import { useGame } from "../hooks/useGame";
import { useSoundEffect } from "../hooks/useSoundEffect";
import { PRIZE_TABLE } from "../data/prizes";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import PrizeTable from "./PrizeTable";
import Lifelines from "./Lifelines";
import AudienceChart from "./AudienceChart";
import PhoneHint from "./PhoneHint";
import ResultScreen from "./ResultScreen";
import ResultPopup from "./ResultPopup";

function App() {
  const game = useGame();
  const {
    playCorrect,
    playWrong,
    playNextQuestion,
    playFinalAnswer,
    playSelect,
  } = useSoundEffect();
  const [showAudience, setShowAudience] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [dropoutConfirm, setDropoutConfirm] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);

  const handleUseLifeline = useCallback(
    (type: "fiftyFifty" | "audience" | "phone") => {
      game.useLifeline(type);
      if (type === "audience") setShowAudience(true);
      if (type === "phone") setShowPhone(true);
    },
    [game],
  );

  const handleSelectAnswer = useCallback(
    (index: number) => {
      playSelect();
      game.selectAnswer(index);
    },
    [game, playSelect],
  );

  const handleConfirmFinalAnswer = useCallback(() => {
    playFinalAnswer();
    game.confirmFinalAnswer();
  }, [game, playFinalAnswer]);

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
        lang={game.lang}
        onRestart={game.resetGame}
        selectedAnswer={game.selectedAnswer}
        correctIndex={game.currentQuestion?.correctIndex}
      />
    );
  }

  const correctAnswer = game.currentQuestion
    ? game.lang === "ja"
      ? game.currentQuestion.answers_ja[game.currentQuestion.correctIndex]
      : game.currentQuestion.answers_en[game.currentQuestion.correctIndex]
    : "";

  return (
    <div className="game-screen">
      <PrizeTable
        currentQuestionIndex={game.currentQuestionIndex}
        lang={game.lang}
      />
      <div className="game-main">
        <div className="game-header">
          <Lifelines
            usedLifelines={game.usedLifelines}
            onUseLifeline={handleUseLifeline}
            disabled={game.selectedAnswer !== null || game.isAnswerRevealed}
            lang={game.lang}
          />
          <div className="game-actions">
            {!game.isAnswerRevealed && game.selectedAnswer === null && (
              <button
                className="dropout-button"
                onClick={() => setDropoutConfirm(true)}
              >
                {game.lang === "ja" ? "ドロップアウト" : "Drop Out"}
              </button>
            )}
          </div>
        </div>

        {game.currentQuestion && (
          <QuestionCard
            questionText={game.currentQuestionText}
            answers={game.currentAnswers}
            questionNumber={game.currentQuestionIndex + 1}
            selectedAnswer={game.selectedAnswer}
            isAnswerRevealed={game.isAnswerRevealed}
            correctIndex={game.currentQuestion.correctIndex}
            eliminatedAnswers={game.eliminatedAnswers}
            onSelectAnswer={handleSelectAnswer}
          />
        )}

        {game.showFinalAnswer && (
          <div className="final-answer-overlay">
            <div className="final-answer-dialog">
              <p className="final-answer-text">
                {game.lang === "ja" ? "ファイナルアンサー？" : "Final Answer?"}
              </p>
              <div className="final-answer-buttons">
                <button
                  className="final-answer-yes"
                  onClick={handleConfirmFinalAnswer}
                >
                  {game.lang === "ja" ? "ファイナルアンサー" : "Final Answer"}
                </button>
                <button
                  className="final-answer-no"
                  onClick={game.cancelFinalAnswer}
                >
                  {game.lang === "ja" ? "やめる" : "Cancel"}
                </button>
              </div>
            </div>
          </div>
        )}

        {game.isAnswerRevealed && !showResultPopup && (
          <div className="next-action">
            <button
              className="next-button"
              onClick={() => {
                const isCorrect =
                  game.selectedAnswer === game.currentQuestion?.correctIndex;
                if (isCorrect) {
                  playCorrect();
                } else {
                  playWrong();
                }
                setShowResultPopup(true);
              }}
            >
              {game.selectedAnswer === game.currentQuestion?.correctIndex
                ? game.lang === "ja"
                  ? "次の問題へ"
                  : "Next Question"
                : game.lang === "ja"
                  ? "結果を見る"
                  : "See Results"}
            </button>
          </div>
        )}

        {showResultPopup && game.currentQuestion && (
          <ResultPopup
            isCorrect={
              game.selectedAnswer === game.currentQuestion.correctIndex
            }
            correctAnswer={correctAnswer}
            prizeName={
              game.selectedAnswer === game.currentQuestion.correctIndex
                ? PRIZE_TABLE[game.currentQuestionIndex].amount
                : game.guaranteedPrize
            }
            questionNumber={game.currentQuestionIndex + 1}
            lang={game.lang}
            onNext={() => {
              setShowResultPopup(false);
              const isCorrect =
                game.selectedAnswer === game.currentQuestion?.correctIndex;
              if (isCorrect) {
                playNextQuestion();
              }
              game.nextQuestion();
            }}
          />
        )}

        <div className="lang-toggle-footer">
          <button
            className={`lang-toggle-button ${game.lang === "ja" ? "active" : ""}`}
            onClick={() => game.setLang("ja")}
          >
            日本語
          </button>
          <button
            className={`lang-toggle-button ${game.lang === "en" ? "active" : ""}`}
            onClick={() => game.setLang("en")}
          >
            English
          </button>
        </div>
      </div>

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
              {game.lang === "ja"
                ? "ドロップアウトしますか？"
                : "Are you sure you want to drop out?"}
              <br />
              <span className="dropout-prize">
                {game.lang === "ja" ? "獲得賞金" : "Prize"}: {game.currentPrize}
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
                {game.lang === "ja" ? "ドロップアウト" : "Drop Out"}
              </button>
              <button
                className="final-answer-no"
                onClick={() => setDropoutConfirm(false)}
              >
                {game.lang === "ja" ? "続ける" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
