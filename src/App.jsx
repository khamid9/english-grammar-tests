import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:testId" element={<TestPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
