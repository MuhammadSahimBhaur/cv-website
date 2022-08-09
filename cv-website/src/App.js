import Projects from './components/Projects.js';
import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Hello from './components/Hello.js';





const App = () => {
  return (
    <div className="App">
      <CssVarsProvider />
      <ResponsiveAppBar></ResponsiveAppBar>
      <Hello />
      <Projects />
    </div>
  );
}

export default App;
