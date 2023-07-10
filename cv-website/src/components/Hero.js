import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FadeIn } from "./FadeIn";

const Hero = () => {
  let intial_trigger = 0.18;
  const trigger_interval = 0.08;
  return (
    <div className="left-side-box">
      <div>
        <div>
          <h1>Hello!</h1>

          <h2
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "100px",
            }}
          >
            Keep scrolling down for more. <ArrowDownwardIcon />
          </h2>
        </div>
        <FadeIn trigger={intial_trigger}>
          <h1>My name is Sahim Bhaur.</h1>
        </FadeIn>
        <FadeIn trigger={(intial_trigger += trigger_interval * 1.5)}>
          <h1>I'm a software engineer.</h1>
        </FadeIn>
        <div style={{ marginTop: "100px" }}></div>
        {/* <FadeIn trigger={(intial_trigger += trigger_interval)}>
          <h1>
            You can contact me <a href="sahimbhaur@outlook.com">here</a>.
          </h1>
        </FadeIn> */}
        <FadeIn trigger={(intial_trigger += trigger_interval * 1.5)}>
          <h1>Feel free to go through my projects!</h1>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
