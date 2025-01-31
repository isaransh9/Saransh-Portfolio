import ProjectCard from "./ProjectCard";
import { ProjectData, ProjectData2 } from "../constants/mockData";

const Project = () => {

  return (
    <div className="project-container">
      <div className="proj-cont2">
        <div className="project-heading">
          <h1>Projects</h1>
        </div>

        <div className="project-section">
          {ProjectData.map((proj) => (
            <ProjectCard key={proj.id} props={proj} />
          ))}
        </div>
        <div className="project-section">
          {ProjectData2.map((proj) => (
            <ProjectCard key={proj.id} props={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
