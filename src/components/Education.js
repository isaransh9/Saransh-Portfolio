import EducationCard from "./EducationCard";
import { educationDetail, skillLogo1, skillLogo2 } from "../constants/mockData";
import SkillLogo from "./SkillLogo";
import Marquee from "react-fast-marquee";

const Education = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Education Section */}
        <div className="flex-1 w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-6 text-blue-400 text-center md:text-left">
            Education
          </h1>
          <div className="grid gap-6">
            {educationDetail.map((edu) => (
              <EducationCard key={edu.id} props={edu} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex-1 w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-6 text-green-400 text-center md:text-left">
            Skills
          </h1>
          <div className="grid gap-6">
            <Marquee
              pauseOnHover
              className="p-3 h-44 mx-3 bg-gray-800 rounded-lg shadow-md"
            >
              {skillLogo1.map((skill) => (
                <SkillLogo key={skill.id} props={skill} />
              ))}
            </Marquee>
            <Marquee
              pauseOnHover
              className="p-3 h-44 mx-3 bg-gray-800 rounded-lg shadow-md"
            >
              {skillLogo2.map((skill) => (
                <SkillLogo key={skill.id} props={skill} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
