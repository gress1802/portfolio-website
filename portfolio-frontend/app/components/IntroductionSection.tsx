import { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const IntroductionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        py: 8,
        px: 2,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          border: '3px solid', // Thicker border
          borderColor: isVisible ? 'primary.main' : 'transparent',
          transition: 'border-color 1s',
          width: '60px', // Increased width
          height: '60px', // Increased height
          boxSizing: 'border-box',
        },
        '&::before': {
          top: '20px', // Adjusted positioning for better visibility
          left: '20px', // Adjusted positioning for better visibility
          borderBottom: 'none',
          borderRight: 'none',
        },
        '&::after': {
          bottom: '20px', // Adjusted positioning for better visibility
          right: '20px', // Adjusted positioning for better visibility
          borderTop: 'none',
          borderLeft: 'none',
        },
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        About Me
      </Typography>
      <Box sx={{ 
        height: '4px', 
        width: '50px', 
        backgroundColor: 'primary.main', 
        margin: '0 auto', 
        mb: 4 
      }} />
      <Typography variant="body1" sx={{ maxWidth: '600px' }}>
        I am currently pursuing a technical career with a passion for technology that drives me to build projects and constantly learn more. My extroverted personality thrives in collaborative environments, both in my studies and sports.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, maxWidth: '600px' }}>
        I have hands-on experience with cloud computing, AI, and web development, using tools like Azure, PyTorch, and various web technologies. I have developed and deployed applications that showcase my adaptability and innovation.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, maxWidth: '600px' }}>
        I am passionate about leveraging my technical expertise to solve real-world problems and create impactful solutions. Whether developing AI-driven tools or building user-friendly web applications, I am committed to learning and growing with new technologies.
      </Typography>
    </Box>
  );
};

export default IntroductionSection;