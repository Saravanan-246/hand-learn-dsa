import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      {/* LOGO */}
      <Link to="/" className="header-logo">
        HandLearn<span>DSA</span>
      </Link>

      {/* NAV */}
      <nav className="header-nav">
        <Link
          to="/topics"
          className={`header-link ${isActive("/topics") ? "active" : ""}`}
        >
          Topics
        </Link>
      </nav>
    </header>
  );
}
