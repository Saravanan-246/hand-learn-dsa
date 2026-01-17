import { Link, useParams } from "react-router-dom";
import { dsaData } from "../data/dsaData";

export default function Questions() {
  const { topic } = useParams();
  const questions = dsaData[topic] || [];

  return (
    <div style={{ padding: "48px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>
        {topic.toUpperCase()}
      </h2>
      <p style={{ color: "var(--muted)", marginBottom: 32 }}>
        Practice important {topic} questions in Java
      </p>

      <div style={{ display: "grid", gap: 20 }}>
        {questions.map((q, idx) => (
          <Link
            key={idx}
            to={`/practice/${topic}/${idx}`}
            style={{
              padding: "24px",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              textDecoration: "none",
              color: "var(--text)",
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>
              {q.title}
            </h3>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              {q.level} • Java
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
