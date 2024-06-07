import "./App.css";
import EntryPoint from "./components/EntryPoint/EntryPoint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import PlayGround from "./components/PlayGround/PlayGround";
import Community from "./components/Community/Community";

function App() {
  return (
    // <div>
    //   <EntryPoint />
    // </div>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EntryPoint />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/Play" element={<PlayGround />} />
          <Route path="/leaderboard" element={<Community />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
