import { Link } from "react-router-dom";
import GodzillaBG from "../components/GodzillaModel";
import "../styles/welcome.css";

export default function Welcome() {
  return (
    <div className="welcome-wrapper">
      {/* 3D BACKGROUND */}
      <GodzillaBG />

      {/* CONTENT OVERLAY */}
      <div className="welcome-overlay">
        <section className="intro-left">
          
          {/* Badge */}
          <div className="intro-badge">
            Java DSA · Practice First
          </div>

          {/* Hero Title */}
          <h1 className="intro-heading">
            Learn Data Structures
            <span>by writing, not memorizing</span>
          </h1>

          {/* Description */}
          <p className="intro-desc">
            A calm, structured way to master <strong>Java DSA</strong> through
            hand-written practice, real problems, and clear thinking.
          </p>

          {/* Features */}
          <ul className="intro-list">
            <li>Arrays &amp; Strings</li>
            <li>Linked List</li>
            <li>Stack &amp; Queue</li>
            <li>Trees &amp; Graphs</li>
          </ul>

          {/* CTA */}
          <div className="cta-group">
            <Link to="/topics" className="primary-btn">
              Start Practice →
            </Link>

            <Link to="/topics" className="secondary-btn">
              View Topics
            </Link>
          </div>

        </section>
      </div>
    </div>
  );
}
