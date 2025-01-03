import { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Divider, Slide } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

interface WorkExperience {
  title: string;
  company: string;
  location: string | string[];
  date: string;
  responsibilities: string[];
}

const workExperience: WorkExperience[] = [
  {
    "title": "Data Scientist",
    "company": "Johnson Controls",
    "location": ["Milwaukee, WI"],
    "date": "October 2024 – Present",
    "responsibilities": [
      "Designing and implementing an Azure LLM landing zone using Terraform to enable rapid deployment of infrastructure for LLM and RAG-based projects, streamlining AI development across the enterprise.",
      "Developing and maintaining Infrastructure as Code (IaC) for a centralized LLM hub, hosted on Azure API Management, integrating Azure OpenAI and self-hosted models to support all enterprise LLM applications with load balancing and scalability.",
      "Building and deploying over 100 VAT forecasting XGBoost models for legal entities within Johnson Controls, automating the entire ML lifecycle using Azure Machine Learning and Azure DevOps, from data preparation and model registration to training. Insights are stored in Snowflake and visualized in Power BI dashboards.",
      "Engineering a legal contract analysis agentic system leveraging GPT-4o, collaboratively prompt-engineered with JCI Legal Strategy, to review NDAs and contracts, identify areas requiring redlining, and save the legal team an estimated 33% of their contract review time."
    ]
  },  
  {
    title: 'Solution Architect Intern',
    company: 'Johnson Controls',
    location: ['La Crosse, WI', 'Milwaukee, WI'],
    date: 'April 2024 – October 2024',
    responsibilities: [
      'Played a key role in the development of a sales copilot (RAG), primarily utilizing Azure OpenAI (GPT-4), Azure AI Search, Azure ML Prompt Flow, Azure Blob Storage, and Azure Document Intelligence to save approximately 15% of our sales rep’s time spent searching documents.',
      'Wrote Terraform IaC scripts to provision Azure cloud infrastructure and built Github Actions CI/CD pipelines for multiple applications, bringing them into compliance with enterprise standards.',
      'Presented our sales copilot to the CIO, CTO, and CEO of Johnson Controls, earning recognition and securing a funding allocation of $250,000 to advance from POC to Pilot.',
    ],
  },
  {
    title: 'Data Analytics Intern',
    company: 'Johnson Controls',
    location: 'Milwaukee, WI',
    date: 'May 2023 – April 2024',
    responsibilities: [
      'Developed a React Azure DevOps extension with a .NET 6 backend, utilizing an Azure App Service, Azure Functions, Azure SQL, Azure Data Factory, and deployed with an Azure DevOps pipeline.',
      'Utilized spaCy, pandas, and gensim in analyzing over 10,000 user comments, helping to identify key areas of improvement and aid allocation of 1/2 of total commercial funding for FY24.',
      'Built an LLM-driven summarization tool using GPT-3.5 Turbo and spaCy to summarize and categorize user comments, displaying the results in a Power BI dashboard.',
    ],
  },
  {
    title: 'Deli Clerk',
    company: 'Kroger',
    location: 'Wisconsin, United States',
    date: 'Mar 2021 – Apr 2024',
    responsibilities: [
      'Worked as a deli clerk, slicing meats and serving customers with a friendly demeanor.',
      'Maintained a clean and organized work environment while ensuring food safety standards were met.',
      'Provided product recommendations to customers, contributing to an enhanced shopping experience.',
    ],
  },
];

interface WorkExperienceDialogProps {
  open: boolean;
  handleClose: () => void;
  job: WorkExperience | null;
}

function WorkExperienceDialog({ open, handleClose, job }: WorkExperienceDialogProps) {
  if (!job) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{job.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="subtitle1">{job.company}</Typography>
          <Typography variant="subtitle2">
            {Array.isArray(job.location) ? job.location.join(' & ') : job.location}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {job.date}
          </Typography>
          <ul>
            {job.responsibilities.map((task, idx) => (
              <li key={idx}>
                <Typography variant="body2">{task}</Typography>
              </li>
            ))}
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function WorkExperienceSection() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<WorkExperience | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(workExperience.length).fill(false));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.timeline-item');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        setVisibleItems((prev) => {
          const newState = [...prev];
          newState[index] = isVisible;
          return newState;
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenDialog = (job: WorkExperience) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedJob(null);
  };

  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
        Work Experience
      </Typography>
      <Box sx={{ 
        height: '4px', 
        width: '50px', 
        backgroundColor: 'primary.main', 
        margin: '0 auto', 
        mb: 4 
      }} />
      <Timeline position="alternate" sx={{ padding: 0 }}>
        {workExperience.map((job, index) => (
          <TimelineItem
            key={index}
            position={isMobile ? (index % 2 === 0 ? 'right' : 'left') : (index % 2 === 0 ? 'left' : 'right')}
            className="timeline-item"
          >
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < workExperience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Slide
                direction={isMobile ? (index % 2 === 0 ? 'left' : 'right') : (index % 2 === 0 ? 'right' : 'left')}
                in={visibleItems[index]}
                timeout={600}
              >
                <Box
                  onClick={isMobile ? () => handleOpenDialog(job) : undefined}
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    p: 3,
                    boxShadow: 3,
                    mb: 2,
                    textAlign: 'left',
                    maxWidth: '100%',
                    cursor: isMobile ? 'pointer' : 'default',
                    fontSize: isMobile ? '0.875rem' : 'inherit',
                  }}
                >
                  <Typography variant={isMobile ? 'body1' : 'h6'} sx={{ fontWeight: 'bold' }}>
                    {job.title}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant={isMobile ? 'body2' : 'subtitle1'}>{job.company}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    {job.date}
                  </Typography>
                  {!isMobile && (
                    <ul>
                      {job.responsibilities.map((task, idx) => (
                        <li key={idx}>
                          <Typography variant="body2">{task}</Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </Box>
              </Slide>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {selectedJob && (
        <WorkExperienceDialog 
          open={openDialog} 
          handleClose={handleCloseDialog} 
          job={selectedJob} 
        />
      )}
    </Box>
  );
}