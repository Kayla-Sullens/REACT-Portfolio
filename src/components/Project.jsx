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
      </div>
      <div>
      <a href={application}><button className="websiteBtn">Application</button></a>
          <a href={repo}><button className="websiteBtn">GitHub Repo</button></a>
      </div>
    </div>
  );
}

