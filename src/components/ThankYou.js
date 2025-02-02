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
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-md mx-auto px-6">
        <div className="flex justify-center space-x-16 mb-8">
          <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-14 h-14 transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href={leetcodeLink} target="_blank" rel="noopener noreferrer">
            <img
              src={leetcodeIcon}
              alt="Leetcode"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href={codechefLink} target="_blank" rel="noopener noreferrer">
            <img
              src={codechefIcon}
              alt="CodeChef"
              className="w-22 h-12 transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href={codeforcesLink} target="_blank" rel="noopener noreferrer">
            <img
              src={codeforcesIcon}
              alt="Codeforces"
              className="w-28 h-12 transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        <div className="text-center text-gray-400">
          <h4>&#169; Saransh Meena | All Rights Reserved</h4>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
