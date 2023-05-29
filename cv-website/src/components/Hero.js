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

          <h2 style={{ display: "flex", alignItems: "center" }}>
            Keep scrolling down for more. <ArrowDownwardIcon />
          </h2>
        </div>
        <FadeIn trigger={intial_trigger}>
          <h1 style={{ marginTop: "200px" }}>My name is Sahim Bhaur.</h1>
        </FadeIn>
        <FadeIn trigger={(intial_trigger += trigger_interval)}>
          <h1 style={{ marginTop: "0px" }}>I'm a software engineer.</h1>
        </FadeIn>
        <FadeIn trigger={(intial_trigger += trigger_interval)}>
          <h1 style={{ marginTop: "400px" }}>
            You can contact me <a href="www.google.com">here</a>.
          </h1>
        </FadeIn>
        <FadeIn trigger={(intial_trigger += trigger_interval)}>
          <h1 style={{ marginTop: "0px" }}>
            Feel free to go through my projects!
          </h1>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
