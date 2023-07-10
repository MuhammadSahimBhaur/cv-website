import { useParams } from "react-router-dom";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import useFetch from "../hooks/useFetch";

const ImageBox = ({ image }) => {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        p: 0,
        m: 0,
        marginX: 2,
        marginY: 2,
      }}
    >
      <Card component="li" sx={{ minWidth: 500, minHeight: 500, flexGrow: 1 }}>
        <CardCover>
          <img src={image} alt="" />
        </CardCover>
        <CardContent sx={{ justifyContent: "center", gap: 1 }}>
          <Typography level="h6" fontWeight="lg" textColor="#fff" mt={60}>
            Image
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export const ProjectPage = () => {
  const { project_name } = useParams();
  console.log("project_name", project_name);

  let data = useFetch("http://localhost:3005/projects");
  const projects = data?.data?.projects;
  //   console.log(projects);

  const searchByTitle = (title, projects) => {
    const project = projects?.find((project) => project.Title === title);
    return project;
  };

  const currentPoject = searchByTitle(project_name, projects);
  currentPoject ? console.log(currentPoject) : console.log("none");

  return (
    <div className="ProjectPage">
      <div className="ProjectPageColumns">
        <div className="ProjectColumn1">
          {projects && <ImageBox image={currentPoject?.image} />}
        </div>
        <div className="ProjectColumn2">
          <div className="project-page-title">
            <h1>{project_name}</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: currentPoject?.Description }}
            className="project-page-desc"
          ></div>
        </div>
      </div>
    </div>
  );
};
