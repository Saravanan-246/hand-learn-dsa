import { useParams, Link } from "react-router-dom";
import { dsaData } from "../data/dsaData";

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

export default function Questions() {
  const { topic } = useParams();

  const dataKey = topicKeyMap[topic];
  const questions = dsaData[dataKey];

  if (!questions) {
    return <p style={{ padding: 32 }}>Topic not found</p>;
  }

  return (
    <div style={{ padding: 48 }}>
      <h2 style={{ fontSize: 28, marginBottom: 24 }}>
        {topic.replace("-", " ").toUpperCase()} Questions
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {questions.map((q, index) => (
          <li key={index} style={{ marginBottom: 16 }}>
            <Link
              to={`/practice/${topic}/${index}`}
              style={{
                display: "block",
                padding: 16,
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                textDecoration: "none",
                color: "var(--text)",
              }}
            >
              <strong>{q.title}</strong>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>
                Level: {q.level}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
