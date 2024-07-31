import { useRef, useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Divider } from '@mui/material';

interface AnimatedProjectCardProps {
  title: string;
  technologies: string;
  date: string;
  description: string[];
  isLeftAligned: boolean;
}

const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = ({ title, technologies, date, description, isLeftAligned }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0, rootMargin: '0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${isLeftAligned ? '-100%' : '100%'})`,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
        willChange: 'transform, opacity',
        width: '100%',
        maxWidth: { xs: '100%', sm: 400 },
        visibility: isVisible ? 'visible' : 'hidden',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        '&:hover': {
          transform: 'scale(1.05)', // Slightly enlarge the card on hover
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Add shadow for depth effect
        },
      }}
    >
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography 
            variant="subtitle2" // Using subtitle2 for smaller font size
            component="div" 
            color="text.secondary" 
            sx={{
              fontSize: '0.875rem', // Set the font size smaller
              fontWeight: 'bold',  // Make the skills bold
              color: 'primary.main', // Change the color to primary color
              transition: 'color 0.3s ease, transform 0.3s ease', // Add smooth transition effect
              '&:hover': {
                color: 'secondary.main', // Change color on hover
                transform: 'scale(1.1)', // Slightly enlarge the skills on hover
              }
            }}
          >
            {technologies} | {date}
          </Typography>
          <Divider sx={{ my: 2 }} /> {/* Divider between skills and description */}
          {description.map((desc, index) => (
            <Typography key={index} variant="body2">
              {desc}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AnimatedProjectCard;