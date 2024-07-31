"use client";

import dynamic from 'next/dynamic';
import { Box, Container, Typography, Link } from '@mui/material';

const CustomThemeProvider = dynamic(() => import('./ThemeProvider'), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CustomThemeProvider>
      <Container
        component="main"
        maxWidth={false}
        sx={{
          backgroundColor: '#0a192f', // Navy blue background
          minHeight: '100vh',
          color: 'white',
          width: '100%',
          padding: 0,
        }}
      >
        {children}
      </Container>
      <footer>
        <Container
          maxWidth={false}
          sx={{
            py: 4,
            textAlign: 'center',
            backgroundColor: '#0a192f',
            color: 'white',
            width: '100%',
            padding: 0,
          }}
        >
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Joseph Gress. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </CustomThemeProvider>
  );
}