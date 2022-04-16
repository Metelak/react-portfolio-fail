import React from "react";

return (
  <div>
    <div className="flex-row">
      {projects.map((project, idx) => {
        <project project={project} key={"project" + idx} />;
      })}
    </div>
  </div>
);

export default Portfolio;
