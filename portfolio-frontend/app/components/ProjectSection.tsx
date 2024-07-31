import { Box, Typography, Grid } from '@mui/material';
import AnimatedProjectCard from './AnimatedProjectCard';

interface Project {
  title: string;
  technologies: string;
  date: string;
  description: string[];
}

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
        Projects
      </Typography>
      <Box sx={{ 
        height: '4px', 
        width: '50px', 
        backgroundColor: 'primary.main', 
        margin: '0 auto', 
        mb: 4 
      }} />
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid 
            item 
            xs={12} // Full width on mobile view
            sm={6} // Two projects per row on small and larger screens
            key={index} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AnimatedProjectCard
              title={project.title}
              technologies={project.technologies}
              date={project.date}
              description={project.description}
              isLeftAligned={index % 2 === 0}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectSection;