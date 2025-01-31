import { Link } from "react-router-dom";
import { ResumeLink } from "../constants/mockData";
const Header = () => {
  return (
    <div className="header-container">
      <div className="title">
        <h1>&lt;Saransh Meena/&gt;</h1>
      </div>
      <div className="nav-items">
        <button className="header-btn">
          <Link to="/">Home</Link>
        </button>
        <button className="header-btn">
          <a href={ResumeLink} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
        <button className="header-btn">
          <Link to="/project">Projects</Link>
        </button>
        <button className="header-btn">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
