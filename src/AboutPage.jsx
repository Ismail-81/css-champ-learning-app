import "./Css/AboutPage.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate()
  return (
    <div className="about-container">
      <button className="back" onClick={() =>navigate("/background")}>Back To Game</button>
      <div className="about-box">
        <img src={logo} alt="CssChamp Logo" className="about-logo" />
        <h1 className="about-title">{`{CssChamp}`}</h1>
        <p className="about-text">
          Welcome to <strong>{`{CssChamp}`}</strong> — the ultimate coding game
          where you level up your CSS skills by solving interactive challenges.
        </p>

        <p className="about-text">
          Each question gives you a real coding scenario. Write the right CSS,
          pass the test, and unlock the next challenge! 
        </p>

        <p className="about-text">
          Whether you're a beginner or a pro, <strong>{`{CssChamp}`}</strong>{" "}
          helps you sharpen your web styling skills in a fun, competitive way.
        </p>

        <div className="about-footer">
          <h3>Features:</h3>
          <ul>
            <li>Fun coding puzzles</li>
            <li>Learn CSS properties interactively</li>
            <li>Track your progress</li>
            <li>Compete & improve your speed</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default AboutPage;
