import { useState } from "react";
import { dsaProblemDetails } from "../data/dsaProblemDetails";
import "../styles/practice.css";
const ProblemPanel = ({ selectedTitle }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!selectedTitle) {
    return <div className="panel">Select a problem 👆</div>;
  }

  const problem = dsaProblemDetails[selectedTitle];

  if (!problem) {
    return <div className="panel">Problem data not found ❌</div>;
  }

  return (
    <div className="panel">
      <h2>{selectedTitle}</h2>

      <p><strong>Description:</strong></p>
      <p>{problem.description}</p>

      <p><strong>Input:</strong></p>
      <pre>{problem.input}</pre>

      <p><strong>Output:</strong></p>
      <pre>{problem.output}</pre>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="answer-btn"
      >
        {showAnswer ? "Hide Answer -" : "Show Answer +"}
      </button>

      {showAnswer && (
        <>
          <p><strong>Java Answer:</strong></p>
          <pre className="code-box">{problem.answer}</pre>
        </>
      )}
    </div>
  );
};

export default ProblemPanel;
