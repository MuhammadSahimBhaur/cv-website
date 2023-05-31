import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const ProjectCardFlipper = ({
  data: { Title, image, Description, id },
  flipped,
}) => {
  if (flipped) {
    return (
      <div
        onClick={() => {
          alert(id);
        }}
        style={{ display: "flex", direction: "row", alignItems: "center" }}
      >
        <div className="project-description">
          <h2>{Title}</h2>
          <p className="description">{Description}</p>
        </div>

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
              >
                Image
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          alert(id);
        }}
        style={{ display: "flex", direction: "row", alignItems: "center" }}
      >
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
          <Card
            component="li"
            sx={{ minWidth: 300, flexGrow: 1 }}
            onClick="{handleOnClick}"
          >
            <CardCover>
              <img src={image} alt="" />
            </CardCover>
            <CardContent sx={{ justifyContent: "center", gap: 1 }}>
              <Typography
                level="h6"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Image
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <div className="project-description">
          <h2>{Title} </h2>
          <p className="description">{Description}</p>
        </div>
      </div>
    );
  }
};

export { ProjectCardFlipper };
