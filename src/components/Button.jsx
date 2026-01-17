export default function Button({ children, onClick, type = "primary" }) {
  const styles = {
    primary: {
      background: "var(--accent)",
      color: "#000",
    },
    ghost: {
      background: "transparent",
      color: "var(--text)",
      border: "1px solid var(--border)",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 26px",
        borderRadius: 999,
        border: "none",
        fontWeight: 600,
        cursor: "pointer",
        ...styles[type],
      }}
    >
      {children}
    </button>
  );
}
