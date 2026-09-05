import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import testsList from "../data/testsList";

function Profile() {
  const [profile, setProfile] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("userProfile") || "{}");
    } catch {
      return {};
    }
  });
  const [name, setName] = useState(profile.name || "");
  const [avatar, setAvatar] = useState(profile.avatar || null);
  const fileInputRef = useRef(null);

  const results = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("testResults") || "{}");
    } catch {
      return {};
    }
  }, []);

  // Create map of testId -> test info
  const testInfoMap = useMemo(() => {
    const map = {};
    testsList.forEach((test) => {
      map[test.id] = test.title;
    });
    return map;
  }, []);

  // Calculate rating stats - run when results change
  const ratingStats = useMemo(() => {
    const ratings = Object.values(results);
    const totalTests = ratings.length;
    const totalCorrect = ratings.reduce((s, r) => s + r.score, 0);
    const avgScore = totalTests > 0 ? Math.round((totalCorrect / (ratings.reduce((s, r) => s + r.total, 0) || 1)) * 100) : 0;
    const bestScore = totalTests > 0 ? Math.max(...ratings.map((r) => r.score)) : 0;
    return { totalTests, avgScore, bestScore, totalCorrect };
  }, [results]);

  const handleSave = () => {
    const updated = { name, avatar };
    localStorage.setItem("userProfile", JSON.stringify(updated));
    setProfile(updated);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 512 * 1024) {
      alert("Image too large. Max 512 KB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const totalTests = testsList.length;
  const completedTests = testsList.filter((t) => results[t.id]).length;
  const totalCorrect = Object.values(results).reduce((s, r) => s + r.score, 0);
  const totalQuestions = Object.values(results).reduce((s, r) => s + r.total, 0);

  return (
    <div className="profile-page">
      <Link to="/" className="back-link">&larr; Topics</Link>

      <div className="profile-header">
        <div
          className="profile-avatar"
          onClick={() => fileInputRef.current?.click()}
          title="Click to change avatar"
        >
          {avatar ? (
            <img src={avatar} alt="Avatar" />
          ) : (
            <span className="profile-avatar__placeholder">
              {name ? name.charAt(0).toUpperCase() : "?"}
            </span>
          )}
          <div className="profile-avatar__overlay">Change</div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="sr-only"
        />

        <input
          type="text"
          className="profile-name-input"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleSave}
          maxLength={30}
        />
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <span className="stat-value">{completedTests}</span>
          <span className="stat-label">of {totalTests} completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{totalCorrect}</span>
          <span className="stat-label">correct answers</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0}%
          </span>
          <span className="stat-label">overall accuracy</span>
        </div>
      </div>

      <div className="profile-rating">
        <h3 className="profile-section-title">My Rating</h3>
        <div className="rating-info">
          <div className="rating-stat">
              <span className="rating-value">{ratingStats.totalTests}</span>
            <span className="rating-label">tests</span>
          </div>
          <div className="rating-stat">
              <span className="rating-value">{ratingStats.avgScore}%</span>
            <span className="rating-label">avg score</span>
          </div>
          <div className="rating-stat">
              <span className="rating-value">{ratingStats.bestScore}</span>
            <span className="rating-label">best score</span>
          </div>
        </div>
        <div className="rating-history" id="rating-history">
          {Object.entries(results).length === 0 ? (
            <p>No rating data yet</p>
          ) : (
            <ul>
              {Object.entries(results)
                .sort((a, b) => b[1].date.localeCompare(a[1].date))
                .slice(0, 5)
                .map(([testId, r]) => (
                  <li key={testId}>
                    <span>{testInfoMap[testId] || testId}</span>
                    <span>{r.score}/{r.total} ({Math.round(r.score / r.total * 100)}%)</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      <h3 className="profile-section-title">Test Records</h3>
      <div className="records-list">
        {testsList.map((test) => {
          const r = results[test.id];
          return (
            <div key={test.id} className={`record-row ${r ? "" : "record-row--empty"}`}>
              <div className="record-info">
                <span className="record-category">{test.category}</span>
                <span className="record-title">{test.title}</span>
              </div>
              <div className="record-result">
                {r ? (
                  <>
                    <span className="record-score">{r.score}/{r.total}</span>
                    <span className="record-percent">
                      {Math.round((r.score / r.total) * 100)}%
                    </span>
                  </>
                ) : (
                  <span className="record-none">—</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
