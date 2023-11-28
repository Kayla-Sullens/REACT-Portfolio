export const Project = ({ name, description, href, imgSrc, imgAlt }) => {
  return (
    <div className="project-info">
      <div className="project-img">
        <a href={href}>
          <img
            src={imgSrc}
            className=""
            style={{ width: "100%" }}
            alt={imgAlt}
          />
        </a>
      </div>
      <div className="project-text">
        <h4>{name}</h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}