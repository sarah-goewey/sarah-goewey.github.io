import React from "react";

const Project = ({ title, renderLink, githubLink, image, summary }) => {
  return (
    <div>
      <h2 className="text-primary">{title}</h2>
      <div className="row">
        <div className="col">
          <a href={renderLink}>
            <button type="button" className="btn">
              Deployed Site
            </button>
          </a>
        </div>
        <div className="col">
          <a href={githubLink}>
            <button type="button" className="btn">
              GitHub Repo
            </button>
          </a>
        </div>
      </div>
      <img
        src={image}
        className="img-thumbnail d-block w-75 mx-auto"
        alt="backup cash register"
      />
      <br />
      <div
        className="row text-success"
        style={{ width: "75%", margin: "auto" }}
      >
        {summary}
      </div>
      <br />
    </div>
  );
};

export default Project;
