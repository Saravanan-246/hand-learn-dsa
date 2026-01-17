import '../styles/practice.css';

export default function OutputBox({ output = "" }) {
  return (
    <div className="output-content">
      {output ? (
        <pre>{output}</pre>
      ) : (
        <div className="output-placeholder">
          Run your code to see output here...
        </div>
      )}
    </div>
  );
}
