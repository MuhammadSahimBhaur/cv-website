import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

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
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img src={image} alt="" />
        </CardCover>
        <CardContent sx={{ justifyContent: "center", gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          ></Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const TitleCard = ({ Title, Summary }) => {
  // console.log(Title, Summary);
  return (
    <div className="project-description">
      <h2>{Title}</h2>
      <p className="description">{Summary}</p>
    </div>
  );
};

const ProjectCardFlipper = ({
  data: { Title, image, Summary, id },
  flipped,
}) => {
  return (
    <>
      <animated.a
        className="project-wrapper"
        href={`/project/${Title}`}
        onClick={() => {}}
        style={{
          display: "flex",
          direction: "row",
          alignItems: "center",
        }}
      >
        {flipped ? (
          <>
            <ImageBox image={image}></ImageBox>
            <TitleCard Title={Title} Summary={Summary}></TitleCard>
          </>
        ) : (
          <>
            <TitleCard Title={Title} Summary={Summary}></TitleCard>
            <ImageBox image={image}></ImageBox>
          </>
        )}
      </animated.a>
    </>
  );
};

export { ProjectCardFlipper };
