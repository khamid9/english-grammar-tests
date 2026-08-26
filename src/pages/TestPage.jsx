import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import testsList from "../data/testsList";
import ComingSoon from "./ComingSoon";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function saveBestScore(testId, score, total) {
  const key = "testResults";
  const prev = JSON.parse(localStorage.getItem(key) || "{}");
  const existing = prev[testId];
  if (!existing || score > existing.score) {
    prev[testId] = { score, total, date: new Date().toISOString() };
    localStorage.setItem(key, JSON.stringify(prev));
    return true;
  }
  return false;
}

function TestPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const testInfo = testsList.find((t) => t.id === testId);
  const [questions, setQuestions] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [restartKey, setRestartKey] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);

  useEffect(() => {
    if (!testInfo) return;

    const handleVisibility = () => {
      if (document.hidden) {
        navigate("/", { replace: true });
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [testInfo, navigate]);

  useEffect(() => {
    if (!testInfo) return;
    setQuestions(null);
    setLoadError(false);
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setIsNewRecord(false);
    import(`../data/tests/${testInfo.questionsFile}.json`)
      .then((mod) => {
        setQuestions(mod.default);
      })
      .catch(() => {
        setLoadError(true);
      });
  }, [testInfo, restartKey]);

  const currentQuestion = questions?.[currentIndex];
  const totalQuestions = questions?.length || 0;

  const options = useMemo(() => {
    if (!currentQuestion) return [];
    return shuffleArray([currentQuestion.correct, ...currentQuestion.distractors]);
  }, [currentQuestion?.id, restartKey]);

  const handleSelect = useCallback(
    (option) => {
      if (selected !== null) return;
      setSelected(option);
      if (option === currentQuestion.correct) setScore((s) => s + 1);
      setAnswers((a) => [
        ...a,
        {
          questionId: currentQuestion.id,
          selected: option,
          correct: currentQuestion.correct,
          isCorrect: option === currentQuestion.correct,
          explanation: currentQuestion.explanation,
          sentence: currentQuestion.sentence,
        },
      ]);
    },
    [selected, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      const finalScore =
        answers.filter((a) => a.isCorrect).length +
        (selected === currentQuestion.correct ? 1 : 0);
      setScore(finalScore);
      if (testInfo) {
        const saved = saveBestScore(testInfo.id, finalScore, totalQuestions);
        setIsNewRecord(saved);
      }
      setShowResult(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    }
  }, [currentIndex, totalQuestions, testInfo, selected, currentQuestion, answers]);

  const handleRestart = useCallback(() => {
    setRestartKey((k) => k + 1);
  }, []);

  const handleExit = useCallback(() => {
    if (window.confirm("Your progress will be lost. Exit to menu?")) {
      navigate("/");
    }
  }, [navigate]);

  if (!testInfo) {
    return (
      <div className="test-page">
        <div className="error-state">Test not found.</div>
        <Link to="/" className="back-link">Back to topics</Link>
      </div>
    );
  }

  if (loadError) {
    return <ComingSoon title={testInfo.title} />;
  }

  if (!questions) {
    return (
      <div className="test-page">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (showResult) {
    const percent = Math.round((score / totalQuestions) * 100);
    return (
      <div className="test-page result-screen">
        <h2>{testInfo.title}</h2>

        <div className="score-display">
          <span className="score-number">{score}</span>
          <span className="score-separator">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>

        <div className="score-percent">{percent}%</div>

        {isNewRecord && <div className="new-record-badge">New record!</div>}

        <p className="score-text">
          {score === totalQuestions
            ? "Perfect score!"
            : percent >= 80
            ? "Great job!"
            : percent >= 50
            ? "Not bad, keep practicing!"
            : "Keep studying and try again!"}
        </p>

        <div className="result-actions">
          <button onClick={handleRestart} className="btn btn-primary">
            Try Again
          </button>
          <Link to="/" className="btn btn-secondary">
            Back to Topics
          </Link>
          <Link to="/profile" className="btn btn-secondary">
            My Profile
          </Link>
        </div>

        <div className="answers-review">
          <h3>Answer Review</h3>
          {answers.map((a, i) => (
            <div
              key={a.questionId}
              className={`review-item ${a.isCorrect ? "review-correct" : "review-incorrect"}`}
            >
              <div className="review-header">
                <span className="review-num">{i + 1}</span>
                <span className={`review-status ${a.isCorrect ? "status-correct" : "status-incorrect"}`}>
                  {a.isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>
              <p className="review-sentence">{a.sentence}</p>
              {!a.isCorrect && (
                <p className="review-answer">
                  Your answer: <span className="answer-wrong">{a.selected}</span>
                  {" → "}
                  Correct: <span className="answer-right">{a.correct}</span>
                </p>
              )}
              {a.isCorrect && (
                <p className="review-answer">
                  Answer: <span className="answer-right">{a.correct}</span>
                </p>
              )}
              {a.explanation && (
                <p className="review-explanation">{a.explanation}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="test-page">
      <div className="test-header">
        <button onClick={handleExit} className="back-link back-btn">
          &larr; Menu
        </button>
        <h2 className="test-title">{testInfo.title}</h2>
        <div className="progress-text">
          Question {currentIndex + 1} of {totalQuestions}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="question-card">
        <p className="sentence">{currentQuestion.sentence}</p>
        <div className="options">
          {options.map((option, idx) => {
            let className = "option";
            if (selected !== null) {
              if (option === currentQuestion.correct) {
                className += " correct";
              } else if (option === selected && option !== currentQuestion.correct) {
                className += " incorrect";
              } else {
                className += " disabled";
              }
            }
            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleSelect(option)}
                disabled={selected !== null}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected !== null && currentQuestion.explanation && (
          <div className={`explanation ${selected === currentQuestion.correct ? "explanation--correct" : "explanation--incorrect"}`}>
            <span className="explanation__label">
              {selected === currentQuestion.correct ? "Correct!" : "Wrong!"}
            </span>
            <p className="explanation__text">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {selected !== null && (
        <div className="next-area">
          <button onClick={handleNext} className="btn btn-primary">
            {currentIndex + 1 >= totalQuestions ? "See Results" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}

export default TestPage;
