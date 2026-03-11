import { useRef, useEffect } from "react";
import { PRIZE_TABLE } from "../data/prizes";
import { Lang } from "../types";

interface PrizeTableProps {
  currentQuestionIndex: number;
  lang: Lang;
}

function PrizeTable({ currentQuestionIndex, lang }: PrizeTableProps) {
  const stepperRef = useRef<HTMLDivElement>(null);

  // 現在のステップが見えるようにスクロール
  useEffect(() => {
    if (!stepperRef.current) return;
    const current = stepperRef.current.querySelector(".step.current");
    if (current) {
      current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentQuestionIndex]);

  return (
    <>
      {/* PC版: 従来の縦テーブル */}
      <div className="prize-table">
        <h3 className="prize-table-title">
          {lang === "ja" ? "賞金一覧" : "Prize Table"}
        </h3>
        <ul className="prize-list">
          {[...PRIZE_TABLE].reverse().map((prize, reverseIndex) => {
            const index = PRIZE_TABLE.length - 1 - reverseIndex;
            const isCurrent = index === currentQuestionIndex;
            const isCleared = index < currentQuestionIndex;

            let className = "prize-item";
            if (isCurrent) className += " current";
            if (isCleared) className += " cleared";
            if (prize.isSafetyNet) className += " safety-net";

            return (
              <li key={index} className={className}>
                <span className="prize-question-num">Q{index + 1}</span>
                <span className="prize-amount">{prize.amount}</span>
                {prize.isSafetyNet && <span className="safety-badge">★</span>}
              </li>
            );
          })}
        </ul>
      </div>

      {/* スマホ版: 横スクロールステッパー */}
      <div className="prize-stepper-wrapper">
        <div className="prize-stepper" ref={stepperRef}>
          {PRIZE_TABLE.map((prize, index) => {
            const isCurrent = index === currentQuestionIndex;
            const isCleared = index < currentQuestionIndex;

            let stepClass = "step";
            if (isCurrent) stepClass += " current";
            if (isCleared) stepClass += " cleared";
            if (prize.isSafetyNet) stepClass += " safety-net";

            return (
              <div key={index} className={stepClass}>
                {index > 0 && (
                  <div className={`step-line ${isCleared ? "cleared" : ""}`} />
                )}
                <div className="step-node">
                  <div className="step-dot" />
                  <div className="step-label">
                    <span className="step-q">Q{index + 1}</span>
                    <span className="step-amount">{prize.amount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PrizeTable;
