import EducationCard from "./EducationCard";
import { educationDetail, skillLogo1, skillLogo2 } from "../constants/mockData";
import SkillLogo from "./SkillLogo";
import Marquee from "react-fast-marquee";

const Education = () => {
  return (
    <div className="education-container">
      <div className="edu-container2">
        <h1 className="education-heading">Education</h1>
        <div className="education-section">
          {educationDetail.map((edu) => (
            <EducationCard key={edu.id} props={edu} />
          ))}
        </div>
      </div>
      <div className="skills-container">
        <h1 className="skills-heading">Skills</h1>
        <div className="skill-section">
          <Marquee pauseOnHover>
            {skillLogo1.map((skill) => (
              <SkillLogo key={skill.id} props={skill} />
            ))}
          </Marquee>
          <Marquee pauseOnHover>
            {skillLogo2.map((skill) => (
              <SkillLogo key={skill.id} props={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Education;
