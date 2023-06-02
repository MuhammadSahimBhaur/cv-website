import Projects from "./components/Projects.js";
import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero.js";
import useWindowDimensions from "./hooks/useWindowDimensions.js";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const windowDimensions = useWindowDimensions();

  console.log(windowDimensions.width, windowDimensions.height);

  return (
    <BrowserRouter>
      <div className="App">
        <CssVarsProvider />
        <ResponsiveAppBar />
        <div className="two-columns">
          <Hero />
          <Projects />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
