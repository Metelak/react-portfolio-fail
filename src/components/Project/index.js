import React from "react";
// import { removeHyphenAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img src={require(`../../assets/projects/${name}.jpg`)} alt="" className="project-bg"/>
      <div className="project-text">
          <h3>
              <a href={repo}>Repo</a>
          </h3>
          <h3>
              <a href={link}>Project URL</a>
          </h3>
          <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
