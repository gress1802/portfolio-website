"use client";

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Link, useTheme } from '@mui/material';
import ProjectCard from './components/ProjectCard';
import { keyframes } from '@emotion/react';

// Continuous slide-in from left animation keyframes
const continuousSlideInFromLeft = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  50% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
`;

// Continuous slide-in from right animation keyframes
const continuousSlideInFromRight = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  50% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-100%); opacity: 0; }
`;

// Blinking cursor animation keyframes
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

// Define minimum gap between boxes (in percentage)
const MIN_GAP = 2; // Adjust this value as needed

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random top and left/right positions without overlapping
const getNonOverlappingPositions = (count: number, viewportWidth: number) => {
  const positions: { top: number; left: number; color: 'primary' | 'secondary' }[] = [];
  const usedPositions: { top: number; left: number }[] = [];

  for (let i = 0; i < count; i++) {
    let top: number, left: number;
    let attempts = 0;
    const maxAttempts = 100;

    do {
      if (viewportWidth < 1250) {
        top = i % 2 === 0 ? getRandomNumber(5, 20) : getRandomNumber(80, 95); // Split half and half within restricted ranges
      } else {
        top = getRandomNumber(5, 95); // Random top position between 5% and 95%
      }
      const isAbove = top > 80 || top < 20;
      left = isAbove ? getRandomNumber(-5, 35) : getRandomNumber(-5, 25); // Random left position between -5% and 25%
      attempts++;
    } while (
      usedPositions.some(pos => Math.abs(pos.top - top) < MIN_GAP) && 
      attempts < maxAttempts
    );

    if (attempts < maxAttempts) {
      const color: 'primary' | 'secondary' = i % 2 === 0 ? 'primary' : 'secondary'; // Alternate colors
      usedPositions.push({ top, left });
      positions.push({ top, left, color });
    }
  }

  return positions;
};

export default function Home() {
  const theme = useTheme();
  const [viewportWidth, setViewportWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [displayText, setDisplayText] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [displaySubtitle, setDisplaySubtitle] = useState<string>('');
  const fullText = "Hi, my name is";
  const nameText = "Joseph Gress.";
  const subtitleText = "Software Engineer / Data Scientist";

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Ensure the initial width is set correctly
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => {
        if (index < fullText.length) {
          const newText = prev + fullText[index];
          index++;
          return newText;
        } else {
          clearInterval(typingInterval);
          // Start typing the name text after fullText is complete
          let nameIndex = 0;
          const nameTypingInterval = setInterval(() => {
            setDisplayName((prev) => {
              if (nameIndex < nameText.length) {
                const newText = prev + nameText[nameIndex];
                nameIndex++;
                return newText;
              } else {
                clearInterval(nameTypingInterval);
                // Start typing the subtitle text after nameText is complete
                let subtitleIndex = 0;
                const subtitleTypingInterval = setInterval(() => {
                  setDisplaySubtitle((prev) => {
                    if (subtitleIndex < subtitleText.length) {
                      const newText = prev + subtitleText[subtitleIndex];
                      subtitleIndex++;
                      return newText;
                    } else {
                      clearInterval(subtitleTypingInterval);
                      return prev;
                    }
                  });
                }, 100); // Adjust typing speed as needed
                return prev;
              }
            });
          }, 150); // Adjust typing speed as needed
          return prev;
        }
      });
    }, 150); // Adjust typing speed as needed

    return () => clearInterval(typingInterval);
  }, []);

  const leftPositions = getNonOverlappingPositions(20, viewportWidth);
  const rightPositions = getNonOverlappingPositions(20, viewportWidth);

  const projects = [
    {
      title: 'Kaggle Cancer Detection',
      technologies: 'Pytorch, Pytorch Lightning',
      date: 'May 2024',
      description: [
        'Leveraged transfer learning by training a ResNet-18 model on a Kaggle dataset for the classification of cancerous cells, achieving a high classification accuracy of 92%',
        'Developed a lightweight, custom version of ResNet tailored for binary classification tasks, utilizing convolutional and residual blocks with maximum pooling and adaptive pooling strategies for an 86% accuracy',
        'Experimented with data augmentation and hyperparameter tuning, including adjustments to learning rates and optimizer configurations, to enhance model performance and accuracy',
      ],
    },
    {
      title: 'Job Search Engine',
      technologies: 'Angular, NodeJS, MongoDB, AWS',
      date: 'July 2023',
      description: [
        'Built a user-friendly, MEAN Stack web application integrating the USA Jobs API and supporting profile management, user administration, and advanced search capabilities',
        'Visualized data from the CareerOneStop API using Angular Charts to provide useful insights on salaries, projected employment growth, and top industries hiring for specific occupations',
      ],
    },
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        color: theme.palette.text.primary,
        py: 4,
        width: '100%',
        padding: 0,
      }}
    >
      <Box sx={{ position: 'relative', textAlign: 'center', py: 8 }}>
        {leftPositions.map((pos, i) => (
          <Box
            key={`left-${i}`}
            sx={{
              position: 'absolute',
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              height: '4px',
              width: '100px', // Fixed width
              backgroundColor: pos.color === 'primary' ? theme.palette.primary.main : theme.palette.text.secondary,
              transform: 'translateX(-100%)', // Initially off-screen to the left
              opacity: 0,
              animation: `${continuousSlideInFromLeft} 3s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`, // Staggered animation delay with 0.1s difference
            }}
          />
        ))}
        <Box sx={{ display: 'inline-flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h2" sx={{ position: 'relative', display: 'inline' }}>
            {displayText}
            {!displayName && (
              <Box
                sx={{
                  display: 'inline-block',
                  verticalAlign: 'text-bottom', // Align the cursor with the text
                  height: '1.25em', // Set to match the height of the text
                  width: '2px',
                  backgroundColor: theme.palette.text.primary,
                  animation: `${blink} 1s infinite`,
                  marginLeft: '-2px' // Ensure the cursor is close to the last letter
                }}
              />
            )}
          </Typography>
        </Box>
        <Typography variant="h2" component="h1" sx={{ mb: 2, color: theme.palette.primary.main }}>
          {displayName}
          {!displaySubtitle && displayName && (
            <Box
              sx={{
                display: 'inline-block',
                verticalAlign: 'text-bottom', // Align the cursor with the text
                height: '1.25em', // Set to match the height of the text
                width: '2px',
                backgroundColor: theme.palette.text.primary,
                animation: `${blink} 1s infinite`,
                marginLeft: '-2px' // Ensure the cursor is close to the last letter
              }}
            />
          )}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary }}>
          {displaySubtitle}
          {displaySubtitle && (
            <Box
              sx={{
                display: 'inline-block',
                verticalAlign: 'text-bottom', // Align the cursor with the text
                height: '1.25em', // Set to match the height of the text
                width: '2px',
                backgroundColor: theme.palette.text.primary,
                animation: `${blink} 1s infinite`,
                marginLeft: '-2px' // Ensure the cursor is close to the last letter
              }}
            />
          )}
        </Typography>
        {rightPositions.map((pos, i) => (
          <Box
            key={`right-${i}`}
            sx={{
              position: 'absolute',
              right: `${pos.left}%`,
              top: `${pos.top}%`,
              height: '4px',
              width: '100px', // Fixed width
              backgroundColor: pos.color === 'primary' ? theme.palette.primary.main : theme.palette.text.secondary,
              transform: 'translateX(100%)', // Initially off-screen to the right
              opacity: 0,
              animation: `${continuousSlideInFromRight} 3s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`, // Staggered animation delay with 0.1s difference
            }}
          />
        ))}
      </Box>
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
          Projects
        </Typography>
        <Box sx={{ 
          height: '4px', 
          width: '50px', 
          backgroundColor: theme.palette.primary.main, 
          margin: '0 auto', 
          mb: 4 
        }} />
        <Grid container spacing={4} direction="column">
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              key={index} 
              sx={{ 
                display: 'flex', 
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                px: { xs: 2, sm: 4, md: 6, lg: index === 0 ? 12 : 8 } // Adjust horizontal padding for Project 1
              }}
            >
              <ProjectCard title={project.title} technologies={project.technologies} date={project.date} description={project.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
          Contact
        </Typography>
        <Box sx={{ 
          height: '4px', 
          width: '50px', 
          backgroundColor: theme.palette.primary.main, 
          margin: '0 auto', 
          mb: 4 
        }} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          Feel free to reach out to me on any of these platforms.
        </Typography>
        <Box>
          <Link href="https://github.com/josephgress" sx={{ mx: 2, color: theme.palette.primary.main }}>
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/josephgress" sx={{ mx: 2, color: theme.palette.primary.main }}>
            LinkedIn
          </Link>
          <Link href="mailto:josephgress@example.com" sx={{ mx: 2, color: theme.palette.primary.main }}>
            Email
          </Link>
        </Box>
      </Box>
    </Container>
  );
}