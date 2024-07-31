"use client";

import { useState, useEffect } from 'react';
import { Box, Container, useTheme } from '@mui/material';
import HeaderSection from './components/HeaderSection';
import IntroductionSection from './components/IntroductionSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import { title } from 'process';
import WorkExperienceSection from './components/WorkExperienceSection';



export default function Home() {
  const theme = useTheme();
  const [typingComplete, setTypingComplete] = useState<boolean>(false);

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
      title: 'BERT Fine-Tuning (Summarization)',
      technologies: 'Hugging Face Transformers, Python, Pytorch, Pytorch Lightning',
      date: 'March 2024',
      description: [
        'Fine-tuned a pre-trained BERT model on a dataset of 50,000 movie reviews to summarize the reviews into a concise, coherent format',
        'Implemented a custom data processing pipeline to preprocess and tokenize the reviews, and fine-tuned the model using a sequence-to-sequence architecture with attention mechanisms',
      ],
    },
    {
      title: 'Job Search Engine',
      technologies: 'Angular, NodeJS, ExpressJS, MongoDB, AWS',
      date: 'July 2023',
      description: [
        'Built a user-friendly, MEAN Stack web application integrating the USA Jobs API and supporting profile management, user administration, and advanced search capabilities',
        'Visualized data from the CareerOneStop API using Angular Charts to provide useful insights on salaries, projected employment growth, and top industries hiring for specific occupations',
      ],
    },
    {
      title: 'Connect Four',
      technologies: 'Angular, Java, Spring Boot, MongoDB',
      date: 'January 2023',
      description: [
        'Developed a full-stack web application for playing Connect Four, featuring real-time gameplay, user authentication, and a leaderboard system',
        'Implemented a RESTful API using Spring Boot to manage game sessions, player moves, and user accounts, and utilized MongoDB for data storage and retrieval',
        'Followed modern authentication practices, including salting and hashing passwords before storing them in the database',
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
      <HeaderSection setTypingComplete={setTypingComplete} />
      <Box id="introduction-section" sx={{ py: 8, textAlign: 'center' }}>
        <IntroductionSection />
      </Box>
      <Box id="projects-section" sx={{ py: 8, textAlign: 'center' }}>
        <ProjectSection projects={projects} />
      </Box>
      <Box id="work-experience-section" sx={{ py: 8, textAlign: 'center' }}>
        <WorkExperienceSection />
      </Box>
      <Box id="contact-section" sx={{ py: 8, textAlign: 'center' }}>
        <ContactSection />
      </Box>
    </Container>
  );
}