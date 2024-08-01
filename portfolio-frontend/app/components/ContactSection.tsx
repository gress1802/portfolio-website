import { useRef, useState, useEffect } from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 8,
        px: 2,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          border: '3px solid', // Thicker border
          borderColor: isVisible ? 'primary.main' : 'transparent',
          transition: 'border-color 1s',
          width: '60px', // Border size
          height: '60px', // Border size
          boxSizing: 'border-box',
        },
        '&::before': {
          top: '20px',
          left: '20px',
          borderBottom: 'none',
          borderRight: 'none',
        },
        '&::after': {
          bottom: '20px',
          right: '20px',
          borderTop: 'none',
          borderLeft: 'none',
        },
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
        Contact
      </Typography>
      <Box
        sx={{
          height: '4px',
          width: '50px',
          backgroundColor: theme.palette.primary.main,
          margin: '0 auto',
          mb: 4,
        }}
      />
      <Typography variant="body1" sx={{ mb: 2 }}>
        Feel free to reach out to me on any of these platforms.
      </Typography>
      <Box>
        <Link
          href="https://github.com/gress1802"
          sx={{ mx: 2, color: theme.palette.primary.main }}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/joseph-gress/"
          sx={{ mx: 2, color: theme.palette.primary.main }}
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:josephgress@example.com"
          sx={{ mx: 2, color: theme.palette.primary.main }}
        >
          Email
        </Link>
      </Box>
    </Box>
  );
};

export default ContactSection;