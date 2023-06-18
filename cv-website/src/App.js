import Projects from "./components/Projects.js";
import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero.js";
import { useScroll } from "@react-spring/web";

// import useWindowDimensions from "./hooks/useWindowDimensions.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  // const windowDimensions = useWindowDimensions();

  // console.log(windowDimensions.width, windowDimensions.height);

  return (
    <div className="App">
      <CssVarsProvider />
      <ResponsiveAppBar />
      <div>
        <Parallax pages={1.5}>
          <ParallaxLayer speed={0.1} offset={0}>
            <Hero style={{ justifyContent: "flex-start" }} />
          </ParallaxLayer>
          <ParallaxLayer speed={1.5} offset={0}>
            <Projects style={{ justifyContent: "flex-end" }} />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default App;
