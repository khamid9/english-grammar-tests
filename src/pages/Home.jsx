import { useMemo } from "react";
import { Link } from "react-router-dom";
import testsList from "../data/testsList";
import TopicIcon from "../components/TopicIcon";

function Home() {
  const results = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("testResults") || "{}");
    } catch {
      return {};
    }
  }, []);

  const profile = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("userProfile") || "{}");
    } catch {
      return {};
    }
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <div className="home-header__top">
          <div>
            <h1>English Grammar Tests</h1>
            <p className="home-subtitle">
              Choose a topic and test your grammar knowledge
            </p>
          </div>
          <Link to="/profile" className="profile-link">
            {profile.avatar ? (
              <img src={profile.avatar} alt="Profile" className="profile-link__avatar" />
            ) : (
              <span className="profile-link__placeholder">
                {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
              </span>
            )}
          </Link>
        </div>
      </header>

      <div className="topics-grid">
        {testsList.map((test) => {
          const hasContent = !!test.hasContent;
          const result = results[test.id];
          const percent = result
            ? Math.round((result.score / result.total) * 100)
            : null;

          return (
            <Link
              to={`/test/${test.id}`}
              key={test.id}
              className={`topic-card ${!hasContent ? "topic-card--disabled" : ""}`}
              tabIndex={hasContent ? 0 : -1}
              aria-disabled={!hasContent}
              onClick={(e) => {
                if (!hasContent) e.preventDefault();
              }}
            >
              <TopicIcon name={test.icon} className="topic-card__icon" />
              <span className="topic-card__category">{test.category}</span>
              <h2 className="topic-card__title">{test.title}</h2>
              <div className="topic-card__footer">
                {hasContent ? (
                  <>
                    <span className="topic-card__count">
                      {test.questionCount} questions
                    </span>
                    {percent !== null && (
                      <span className="topic-card__badge">{percent}%</span>
                    )}
                  </>
                ) : (
                  <span className="topic-card__soon">Coming soon</span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
