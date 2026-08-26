import { HashRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import Profile from "./pages/Profile";
import "./App.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <a href="#/">Back to menu</a>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:testId" element={<TestPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;
