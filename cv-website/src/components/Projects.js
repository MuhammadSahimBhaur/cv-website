import Project from "./Project";
import React from "react";
import useFetch from "../hooks/useFetch";

// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  let intial_trigger = 0.005;
  const trigger_interval = 0.1;

  let data = useFetch("http://localhost:3004/projects");

  const projects = data.data;

  // if (projects)
  //     console.log(data[0])
  let firstProject;
  if (projects) {
    firstProject = projects.shift();
  }

  return (
    <div className="projects">
      {projects ? (
        <FadeIn trigger={intial_trigger}>
          <div key={firstProject.id}>
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
              <div key={project.id}>
                <Project data={project} />
              </div>
            </FadeIn>
          );
        })}
      {/* : (
        <div className="skeleton">
          <Stack spacing={1}>
            <div>
              <Skeleton
                animation="wave"
                variant="rounded"
                width={700}
                height={100}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "2rem" }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "2rem" }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "2rem" }}
              />
            </div>
          </Stack>
        </div>
      )} */}
    </div>
  );
};

export default Projects;
