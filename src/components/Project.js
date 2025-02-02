import ProjectCard from "./ProjectCard";
import { ProjectData, ProjectData2 } from "../constants/mockData";

const Project = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-2xl mx-auto px-0">
        {" "}
        {/* Changed to max-w-screen-2xl */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...ProjectData, ...ProjectData2].map((proj) => (
            <ProjectCard key={proj.id} props={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
