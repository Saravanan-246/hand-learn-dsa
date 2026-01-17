import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/practice.css";

export default function PracticeEditor({
  value = "",
  onChange = () => {},
  readOnly = false,
  autoFocus = true,
  onRun = () => {},
}) {
  const textareaRef = useRef(null);
  const [lineCount, setLineCount] = useState(1);

  /* ---------------- CHANGE HANDLER ---------------- */
  const handleChange = useCallback(
    (e) => {
      if (readOnly) return;

      const newValue = e.target.value;
      onChange(newValue);
      setLineCount(newValue.split("\n").length || 1);
    },
    [onChange, readOnly]
  );

  /* ---------------- RUN HANDLER ---------------- */
  const handleRun = useCallback(() => {
    if (!readOnly && value.trim()) {
      onRun(value);
    }
  }, [value, readOnly, onRun]);

  /* ---------------- JAVA TEMPLATE ---------------- */
  const javaTemplate = `// Write your Java solution here
class Solution {
    public void solve() {
        // Your code here
    }
}`;

  /* ---------------- AUTO FOCUS ---------------- */
  useEffect(() => {
    if (autoFocus && textareaRef.current && !readOnly) {
      textareaRef.current.focus();
    }
  }, [autoFocus, readOnly]);

  /* ---------------- KEYBOARD SHORTCUTS ---------------- */
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea || readOnly) return;

    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Enter => Run
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleRun();
        return;
      }

      // Tab => 4 spaces indent (FIXED: Direct DOM manipulation)
      if (e.key === "Tab") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        // Insert 4 spaces at cursor/selection
        const spaces = "    ";
        textarea.setRangeText(spaces, start, end, "end");
        
        // Move cursor after spaces
        textarea.setSelectionRange(start + 4, start + 4);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };

    textarea.addEventListener("keydown", handleKeyDown);
    return () => textarea.removeEventListener("keydown", handleKeyDown);
  }, [handleRun, readOnly]);

  return (
    <div className="editor-panel" role="main">
      {/* Header */}
      <div className="editor-header">
        <div className="editor-lang-badge">Java</div>
      </div>

      {/* Editor */}
      <div className="editor-content">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          placeholder={javaTemplate}
          spellCheck={false}
          className="code-editor"
          readOnly={readOnly}
          wrap="off"
          aria-label="Professional Java code editor"
        />
      </div>

      {/* Footer */}
      <div className="editor-footer">
        <div className="editor-stats">
          <span className="text-xs" style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>
            {lineCount} lines • {value.length} chars
          </span>
          <span className="text-xs" style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginLeft: '1rem' }}>
            Ctrl+Enter Run • Tab Indent
          </span>
        </div>

        <button
          onClick={handleRun}
          disabled={!value.trim() || readOnly}
          className="run-btn"
          aria-label="Execute Java code (Ctrl+Enter)"
        >
          Run Code
        </button>
      </div>
    </div>
  );
}
