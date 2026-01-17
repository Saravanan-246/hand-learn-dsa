import { Link } from "react-router-dom";

const topics = [
  "Array",
  "Linked List",
  "Stack",
  "Queue",
  "Searching",
  "Sorting",
  "Hashing",
  "String",
  "Recursion",
];

export default function Topics() {
  return (
    <div style={{ padding: "48px" }}>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 32,
        }}
      >
        Topics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
        }}
      >
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/questions/${topic.toLowerCase().replace(" ", "-")}`}
            style={{
              padding: "28px",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              textDecoration: "none",
              color: "var(--text)",
              transition: "transform 0.15s ease, border 0.15s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>{topic}</h3>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              Practice core {topic} problems in Java
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
