interface QuestionCardProps {
  questionText: string;
  answers: string[];
  questionNumber: number;
  selectedAnswer: number | null;
  isAnswerRevealed: boolean;
  correctIndex: number;
  eliminatedAnswers: number[];
  onSelectAnswer: (index: number) => void;
}

const ANSWER_LABELS = ["A", "B", "C", "D"];

function QuestionCard({
  questionText,
  answers,
  questionNumber,
  selectedAnswer,
  isAnswerRevealed,
  correctIndex,
  eliminatedAnswers,
  onSelectAnswer,
}: QuestionCardProps) {
  const getAnswerClass = (index: number) => {
    const classes = ["answer-button"];

    if (eliminatedAnswers.includes(index)) {
      classes.push("eliminated");
      return classes.join(" ");
    }

    if (isAnswerRevealed) {
      if (index === correctIndex) {
        classes.push("correct");
      } else if (index === selectedAnswer) {
        classes.push("wrong");
      }
    } else if (index === selectedAnswer) {
      classes.push("selected");
    }

    return classes.join(" ");
  };

  return (
    <div className="question-card">
      <div className="question-number">Q{questionNumber}</div>
      <div className="question-text">{questionText}</div>
      <div className="answers-grid">
        {answers.map((answer, index) => (
          <button
            key={index}
            className={getAnswerClass(index)}
            onClick={() => onSelectAnswer(index)}
            disabled={
              eliminatedAnswers.includes(index) ||
              selectedAnswer !== null ||
              isAnswerRevealed
            }
          >
            <span className="answer-label">{ANSWER_LABELS[index]}:</span>
            <span className="answer-text">{answer}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
