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
    <div className="project-card">
      <div className="project-details">
        <h1>{name}</h1>
        <h3>{description}</h3>
        <div className="project-btn">
          {frontendGithubLink && (
            <a
              href={frontendGithubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="githubBtn"> Frontend Github </button>
            </a>
          )}
          {backendGithubLink && (
            <a
              href={backendGithubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="githubBtn">Backend Github</button>
            </a>
          )}
          {deployedLink && (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              <button className="githubBtn">Deployed Link</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
