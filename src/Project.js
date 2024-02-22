import React from "react";

const Project = ({ title, renderLink, githubLink, image, summary }) => {
  return (
    <div style={{ height: "550px" }}>
      <h2 className="text-primary">{title}</h2>
      {renderLink && (
        <div
          className="row bg-secondary-subtle"
          style={{ width: "35%", margin: "15px auto", borderRadius: "10px" }}
        >
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
      )}
      {!renderLink && (
        <div
          className="row bg-secondary-subtle"
          style={{ width: "35%", margin: "15px auto", borderRadius: "10px" }}
        >
          <a href={githubLink}>
            <button type="button" className="btn">
              GitHub Repo
            </button>
          </a>
        </div>
      )}
      <img
        src={image}
        className="img-thumbnail d-block w-75 mx-auto bg-success"
        alt="backup cash register"
        style={{ maxWidth: "35%" }}
      />
      <br />
      <div
        className="row text-success"
        style={{ maxWidth: "75%", margin: "auto" }}
      >
        {summary}
      </div>

      <br />
    </div>
  );
};

export default Project;
