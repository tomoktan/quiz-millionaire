import { PRIZE_TABLE } from "../data/prizes";

interface PrizeTableProps {
  currentQuestionIndex: number;
}

function PrizeTable({ currentQuestionIndex }: PrizeTableProps) {
  return (
    <div className="prize-table">
      <h3 className="prize-table-title">賞金一覧</h3>
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
  );
}

export default PrizeTable;
