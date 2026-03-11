const ANSWER_LABELS = ["A", "B", "C", "D"];

interface AudienceChartProps {
  results: number[];
  onClose: () => void;
}

function AudienceChart({ results, onClose }: AudienceChartProps) {
  const maxValue = Math.max(...results);

  return (
    <div className="audience-overlay" onClick={onClose}>
      <div className="audience-chart" onClick={(e) => e.stopPropagation()}>
        <h3 className="audience-title">オーディエンスの回答</h3>
        <div className="chart-bars">
          {results.map((value, index) => (
            <div key={index} className="chart-bar-container">
              <div className="chart-value">{value}%</div>
              <div className="chart-bar-bg">
                <div
                  className="chart-bar-fill"
                  style={{
                    height: `${maxValue > 0 ? (value / maxValue) * 100 : 0}%`,
                  }}
                />
              </div>
              <div className="chart-label">{ANSWER_LABELS[index]}</div>
            </div>
          ))}
        </div>
        <button className="audience-close" onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  );
}

export default AudienceChart;
