import { useNavigate, NavLink } from "react-router-dom";
import "./Css/WelcomePage.css";
import logo from "./assets/logo.png";

function WelcomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/rules"); // redirect to game start
  };

  return (
    <div className="welcome-container">
      <h1 className="wel">Welcome Champion!</h1>
      <div className="welcome-box">
        <img src={logo} alt="CssChamp Logo" className="welcome-logo" />
        <h1 className="welcome-title">{`{CssChamp}`}</h1>
        <p className="welcome-subtitle">
          Master CSS through fun challenges & puzzles! <br />
         
        </p>
        <NavLink to="/rules">
          <button className="start-btn">
            Start Game
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default WelcomePage;
