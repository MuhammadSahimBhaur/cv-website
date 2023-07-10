import Project from "./Project";
import React from "react";
import useFetch from "../hooks/useFetch";

// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  let intial_trigger = 0.005;
  const trigger_interval = 0.1;

  // let data = useFetch("http://localhost:3004/projects");

  let data = useFetch("http://localhost:3005/projects");

  const projects = data?.data?.projects;

  let firstProject;
  if (projects) {
    firstProject = projects.shift();
  }

  return (
    <div className="projects">
      {projects ? (
        <FadeIn trigger={intial_trigger}>
          <div key={firstProject?.id}>
            <Project data={firstProject} />
          </div>
        </FadeIn>
      ) : (
        <></>
      )}
      {projects &&
        projects.map((project) => {
          return (
            <FadeIn trigger={(intial_trigger += trigger_interval)}>
              <div key={project?.id}>
                <Project data={project} />
              </div>
            </FadeIn>
          );
        })}
    </div>
  );
};

export default Projects;
