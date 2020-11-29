import React from 'react';
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from './styles/theme';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="app">
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
    </div>
  );
}

export default App;
