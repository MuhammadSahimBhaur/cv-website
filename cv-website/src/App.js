import Projects from './components/Projects.js';
import React from 'react';
// import { CssVarsProvider } from '@mui/joy/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar'





const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Projects />
    </div>
  );
}

export default App;
