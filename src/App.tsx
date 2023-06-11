import React, { FC } from 'react';
import { Routes } from 'react-router-dom';
import { createRoutes } from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>{createRoutes()}</Routes>
    </ThemeProvider>
  );
};

export default App;
