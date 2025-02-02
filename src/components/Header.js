import { Link } from "react-router-dom";
import { ResumeLink } from "../constants/mockData";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg p-5">
      <div className="text-white text-2xl font-extrabold tracking-wide">
        <h1>&lt;Saransh Meena/&gt;</h1>
      </div>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="px-4 py-1 text-lg rounded-full bg-blue-600 text-white"
        >
          Home
        </Link>
        <a
          href={ResumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 text-lg rounded-full bg-blue-600 text-white"
        >
          Resume
        </a>
        <Link
          to="/project"
          className="px-4 py-1 text-lg rounded-full bg-blue-600 text-white"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="px-4 py-1 text-lg rounded-full bg-blue-600 text-white"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
