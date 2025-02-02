const ProjectCard = (proj) => {
  const {
    id,
    name,
    description,
    backendGithubLink,
    frontendGithubLink,
    deployedLink,
  } = proj.props;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <h3 className="text-gray-400 mb-6">{description}</h3>

        <div className="flex flex-col space-y-3">
          {frontendGithubLink && (
            <a
              href={frontendGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-400 transition duration-300 w-full">
                Frontend Github
              </button>
            </a>
          )}
          {backendGithubLink && (
            <a
              href={backendGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <button className="px-6 py-2 bg-green-500 text-white font-medium rounded-full shadow-md hover:bg-green-400 transition duration-300 w-full">
                Backend Github
              </button>
            </a>
          )}
          {deployedLink && (
            <a
              href={deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-full shadow-md hover:bg-purple-400 transition duration-300 w-full">
                Deployed Link
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
