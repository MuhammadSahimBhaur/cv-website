import * as React from "react";

import Card from "@mui/joy/Card";
import { ProjectCardFlipper } from "./ProjectCardFlipper";

const Project = ({ data }) => {
  const { id } = data;

  return (
    <div className="project-container">
      <Card
        row
        className="project-card"
        component="li"
        sx={{
          bgcolor: "rgb(255, 255, 255)",
          marginY: 3,
          boxShadow:
            "0px 0px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <ProjectCardFlipper data={data} flipped={id % 2 === 1} />
      </Card>
    </div>
  );
};

export default Project;
