import { Link } from "react-router-dom";

function ComingSoon({ title }) {
  return (
    <div className="test-page coming-soon">
      <h2>{title}</h2>
      <div className="coming-soon-icon">...</div>
      <p>Coming soon!</p>
      <p className="coming-soon-sub">This topic is under development.</p>
      <Link to="/" className="btn btn-secondary">
        Back to Topics
      </Link>
    </div>
  );
}

export default ComingSoon;
