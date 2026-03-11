import { LifelineType } from "../types";

interface LifelinesProps {
  usedLifelines: Record<LifelineType, boolean>;
  onUseLifeline: (type: LifelineType) => void;
  disabled: boolean;
}

function Lifelines({ usedLifelines, onUseLifeline, disabled }: LifelinesProps) {
  const lifelines: { type: LifelineType; label: string; icon: string }[] = [
    { type: "fiftyFifty", label: "50:50", icon: "50:50" },
    { type: "audience", label: "オーディエンス", icon: "👥" },
    { type: "phone", label: "テレフォン", icon: "📞" },
  ];

  return (
    <div className="lifelines">
      {lifelines.map(({ type, label, icon }) => (
        <button
          key={type}
          className={`lifeline-button ${usedLifelines[type] ? "used" : ""}`}
          onClick={() => onUseLifeline(type)}
          disabled={usedLifelines[type] || disabled}
          title={label}
        >
          <span className="lifeline-icon">{icon}</span>
          <span className="lifeline-label">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default Lifelines;
