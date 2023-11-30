export const Project = ({ name, description, application, repo, imgSrc, imgAlt }) => {
  return (
    <div className="project-info">
      
      <div className="project-text">
        <h4>{name}</h4>
        <p>
          {description}
        </p>
      </div>
      <div className="project-img">
          <img
            src={imgSrc}
            className="images"
            style={{ width: "50%" }}
            alt={imgAlt}
          />
          <a href={application} className="websiteBtn"><button>Application</button></a>
          <a href={repo} className="websiteBtn"><button>GitHub Repo</button></a>
      </div>
    </div>
  );
}

