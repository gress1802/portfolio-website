import { useState, useEffect } from 'react';
import { Box, Tooltip, Typography, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';

// Blinking cursor animation keyframes
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

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

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

// Define minimum gap between boxes (in percentage)
const MIN_GAP = 2; // Adjust this value as needed

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
        top = i % 2 === 0 ? getRandomNumber(5, 30) : getRandomNumber(70, 95); // Split half and half within restricted ranges
      } else {
        top = getRandomNumber(5, 95); // Random top position between 5% and 95%
      }
      const isAbove = top > 80 || top < 20;
      left = isAbove ? getRandomNumber(-5, 25) : getRandomNumber(-5, 25); // Random left position between -5% and 25%
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

interface HeaderSectionProps {
  setTypingComplete: (value: boolean) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ setTypingComplete }) => {
  const theme = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displaySubtitle, setDisplaySubtitle] = useState('');
  const [showIcons, setShowIcons] = useState([false, false, false]);
  const [typingComplete, setTypingCompleteState] = useState(false);
  const fullText = "Hi, my name is";
  const nameText = "Joseph Gress.";
  const subtitleText = "Software Engineering / Data Science";
  const [viewportWidth, setViewportWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  const leftPositions = getNonOverlappingPositions(20, viewportWidth);
  const rightPositions = getNonOverlappingPositions(20, viewportWidth);

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

                // Show icons sequentially after nameText is complete
                setTimeout(() => setShowIcons([true, false, false]), 100);
                setTimeout(() => setShowIcons([true, true, false]), 250);
                setTimeout(() => setShowIcons([true, true, true]), 400);

                // Start typing the subtitle text after icons are displayed
                setTimeout(() => {
                  let subtitleIndex = 0;
                  const subtitleTypingInterval = setInterval(() => {
                    setDisplaySubtitle((prev) => {
                      if (subtitleIndex < subtitleText.length) {
                        const newText = prev + subtitleText[subtitleIndex];
                        subtitleIndex++;
                        return newText;
                      } else {
                        clearInterval(subtitleTypingInterval);
                        setTypingComplete(true);
                        setTypingCompleteState(true);
                        return prev;
                      }
                    });
                  }, 50); // Adjust typing speed as needed
                }, 400); // Delay to start typing subtitle after the last icon

                return prev;
              }
            });
          }, 100); // Adjust typing speed as needed
          return prev;
        }
      });
    }, 150); // Adjust typing speed as needed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <Box sx={{ position: 'relative', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 8 }}>
      {typingComplete && leftPositions.map((pos, i) => (
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
      <Typography variant="h4" component="h2" sx={{ position: 'relative', display: 'inline' }}>
        {displayText}
        {!displayName && (
          <Box
            sx={{
              display: 'inline-block',
              verticalAlign: 'text-bottom',
              height: '1.25em',
              width: '2px',
              backgroundColor: theme.palette.text.primary,
              animation: `${blink} 1s infinite`,
              marginLeft: '-2px'
            }}
          />
        )}
      </Typography>
      <Typography variant="h2" component="h1" sx={{ mb: 2, color: theme.palette.primary.main }}>
        {displayName}
        {!displaySubtitle && displayName && (
          <Box
            sx={{
              display: 'inline-block',
              verticalAlign: 'text-bottom',
              height: '1.25em',
              width: '2px',
              backgroundColor: theme.palette.text.primary,
              animation: `${blink} 1s infinite`,
              marginLeft: '-2px'
            }}
          />
        )}
      </Typography>
      {showIcons[0] && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Tooltip title="Projects">
            <Box sx={{ mx: 2 }} onClick={() => scrollToSection('projects-section')}>
                <CodeIcon fontSize="large" style={{ cursor: 'pointer' }} />
            </Box>
            </Tooltip>
            {showIcons[1] && (
            <Tooltip title="Contact Me">
                <Box sx={{ mx: 2 }} onClick={() => scrollToSection('contact-section')}>
                <ContactMailIcon fontSize="large" style={{ cursor: 'pointer' }} />
                </Box>
            </Tooltip>
            )}
            {showIcons[2] && (
            <Tooltip title="Work Experience">
                <Box sx={{ mx: 2 }} onClick={() => scrollToSection('work-experience-section')}>
                <WorkIcon fontSize="large" style={{ cursor: 'pointer' }} />
                </Box>
            </Tooltip>
            )}
        </Box>
        )}
      <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary }}>
        {displaySubtitle}
        {displaySubtitle && (
          <Box
            sx={{
              display: 'inline-block',
              verticalAlign: 'text-bottom',
              height: '1.25em',
              width: '2px',
              backgroundColor: theme.palette.text.primary,
              animation: `${blink} 1s infinite`,
              marginLeft: '-2px'
            }}
          />
        )}
      </Typography>
      {typingComplete && rightPositions.map((pos, i) => (
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
  );
};

export default HeaderSection;