"use client";

import { Card, CardContent, Typography, useTheme, Box } from '@mui/material';

interface ProjectCardProps {
  title: string;
  technologies: string;
  date: string;
  description: string[];
}

const ProjectCard = ({ title, technologies, date, description }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <Box>
      <Card sx={{ backgroundColor: theme.palette.background.paper, width: '400px' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="div" color="text.secondary">
            {technologies} | {date}
          </Typography>
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

export default ProjectCard;