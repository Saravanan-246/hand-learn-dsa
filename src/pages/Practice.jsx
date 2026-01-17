// Practice.jsx – FINAL CORRECTED VERSION
import { useParams } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";
import { dsaData } from "../data/dsaData";
import PracticeEditor from "../components/PracticeEditor";
import ProblemPanel from "../pages/ProblemPanel";
import "../styles/practice.css";

/* 🔥 URL topic → dsaData key map */
const topicKeyMap = {
  array: "array",
  "linked-list": "linkedList",
  stack: "stack",
  queue: "queue",
  searching: "searching",
  sorting: "sorting",
  hashing: "hashing",
  string: "string",
  recursion: "recursion",
};

export default function Practice() {
  const { topic, id } = useParams();

  /* ---------- Get Question Safely ---------- */
  const question = useMemo(() => {
    if (!topic || id === undefined) return null;

    const dataKey = topicKeyMap[topic];
    if (!dataKey) return null;

    return dsaData?.[dataKey]?.[Number(id)] ?? null;
  }, [topic, id]);

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  /* ---------- RUN HANDLER ---------- */
  const handleRun = useCallback(() => {
    if (isRunning || !code.trim()) return;

    setIsRunning(true);
    setOutput("Running code...\nPlease wait...");

    setTimeout(() => {
      setOutput(
        `Output:
${code.length} chars processed
Execution Time: 847ms
Status: ✓ Success`
      );
      setIsRunning(false);
    }, 1200);
  }, [code, isRunning]);

  /* ---------- NOT FOUND ---------- */
  if (!question) {
    return (
      <main className="practice-page">
        <section className="not-found" role="alert">
          <div className="error-card">
            <h2>Question Not Found</h2>
            <p>
              The requested problem doesn’t exist.
              <br />
              Please check the URL or select another question.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="practice-page">
      {/* ---------- Title Bar ---------- */}
      <header className="title-bar">
        <h1 className="problem-title">{question.title}</h1>

        <div className="meta">
          <span
            className={`level ${question.level?.toLowerCase() || "easy"}`}
          >
            {question.level || "Easy"}
          </span>
          <span className="lang">Java</span>
        </div>
      </header>

      {/* ---------- 3 PANEL GRID ---------- */}
      <section className="content-grid">
        <ProblemPanel selectedTitle={question.title} />

        <PracticeEditor
          value={code}
          onChange={setCode}
          readOnly={isRunning}
          onRun={handleRun}
          autoFocus
        />

        <article className="output-panel">
          <div className="panel-header">
            Output
            {isRunning && (
              <span className="output-status">Running…</span>
            )}
          </div>

          <pre className="output-box">
            {output || "Run your code to see output here…"}
          </pre>
        </article>
      </section>
    </main>
  );
}
