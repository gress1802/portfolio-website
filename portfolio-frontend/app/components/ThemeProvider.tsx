"use client";

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#64ffda', 
          },
          background: {
            default: '#0a192f', 
            paper: '#112240', 
          },
          text: {
            primary: '#e6f1ff', 
            secondary: '#ccd6f6', 
          },
        },
        typography: {
          fontFamily: 'Roboto Slab, serif',
          h2: {
            color: '#e6f1ff', 
            fontWeight: 'bold',
          },
          h4: {
            color: '#ccd6f6', 
          },
          h5: {
            color: '#64ffda', 
          },
          body1: {
            color: '#8892b0', 
          },
          body2: {
            color: 'text.secondary',
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;