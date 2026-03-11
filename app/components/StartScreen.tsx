"use client";

import { useState } from "react";
import { Lang } from "../types";

interface StartScreenProps {
  onStart: (lang: Lang) => void;
  isLoading: boolean;
}

function StartScreen({ onStart, isLoading }: StartScreenProps) {
  const [lang, setLang] = useState<Lang>("ja");

  return (
    <div className="start-screen">
      <div className="start-logo">
        <h1 className="start-title">{lang === "ja" ? "クイズ" : "Quiz"}</h1>
        <h2 className="start-subtitle">
          {lang === "ja" ? "ミリオネア" : "Millionaire"}
        </h2>
      </div>
      <p className="start-description">
        {lang === "ja" ? (
          <>
            全15問の4択クイズに挑戦！
            <br />
            全問正解で賞金1000万円を目指そう！
          </>
        ) : (
          <>
            Take on 15 multiple-choice questions!
            <br />
            Answer them all correctly to win the grand prize!
          </>
        )}
      </p>
      <div className="lang-selector">
        <button
          className={`lang-button ${lang === "ja" ? "active" : ""}`}
          onClick={() => setLang("ja")}
        >
          日本語
        </button>
        <button
          className={`lang-button ${lang === "en" ? "active" : ""}`}
          onClick={() => setLang("en")}
        >
          English
        </button>
      </div>
      <button
        className="start-button"
        onClick={() => onStart(lang)}
        disabled={isLoading}
      >
        {isLoading
          ? lang === "ja"
            ? "読み込み中..."
            : "Loading..."
          : lang === "ja"
            ? "ゲームスタート"
            : "Start Game"}
      </button>
    </div>
  );
}

export default StartScreen;
