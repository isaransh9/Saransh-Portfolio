import {
  linkedInLink,
  leetcodeLink,
  codechefLink,
  codeforcesLink,
  githubLink,
  linkedinIcon,
  leetcodeIcon,
  codechefIcon,
  codeforcesIcon,
  githubIcon,
} from "../constants/mockData";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <div className="Important-links">
        <div className="links">
          <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Error loading image" />
          </a>
        </div>

        <div className="links">
          <a href={leetcodeLink} target="_blank" rel="noopener noreferrer">
            <img src={leetcodeIcon} alt="Error loading image" />
          </a>
        </div>

        <div className="links">
          <a href={codechefLink} target="_blank" rel="noopener noreferrer">
            <img src={codechefIcon} alt="Error loading image" />
          </a>
        </div>

        <div className="links">
          <a href={codeforcesLink} target="_blank" rel="noopener noreferrer">
            <img src={codeforcesIcon} alt="Error loading image" />
          </a>
        </div>

        <div className="links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Error loading image" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <h4>&#169; Saransh Meena | All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default ThankYou;
