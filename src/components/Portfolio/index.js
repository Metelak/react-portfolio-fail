import React, { useState } from "react";
// import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "weathered-vibes",
      description: "frontend project",
      link: "https://sepidehayani.github.io/WeatheredVibes/",
      repo: "https://github.com/SepidehAyani/WeatheredVibes",
    },
    {
      name: "travel-bug",
      description: "full-stack project",
      link: "https://travelbug-project.herokuapp.com/",
      repo: "https://github.com/Metelak/Travel-bug",
    },
    {
      name: "README-generator",
      description: "Node",
      link: "https://github.com/Metelak/README-generator",
      repo: "https://github.com/Metelak/README-generator",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <project project={project} key={"project" + idx} />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
