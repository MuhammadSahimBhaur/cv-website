import Projects from './components/Projects.js';
import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Hello from './components/Hello.js';
import useWindowDimensions from './hooks/useWindowDimensions.js';





const App = () => {

  const windowDimensions = useWindowDimensions();

  console.log(windowDimensions.width, windowDimensions.height)

  return (
    <div className="App">
      <CssVarsProvider />
      <ResponsiveAppBar></ResponsiveAppBar>

      <div className="two-columns">
        <Hello />
        <Projects />
      </div>
    </div>
  );
}

export default App;
