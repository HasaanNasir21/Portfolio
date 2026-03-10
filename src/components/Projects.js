import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Calendar,
  Users,
  Code,
  Zap,
  Eye,
  Heart
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { useInView } from '../hooks/useInView';
import { useStore } from '../store/useStore';
import { fadeInUp, staggerContainer } from '../lib/utils';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const { projectFilter, setProjectFilter } = useStore();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  const projects = [
    {
      id: 1,
      title: 'CashUp - Full-Stack Payment Management Dashboard',
      description: 'Currently building a comprehensive payment management system with enterprise-grade authentication, role-based access control, and real-time analytics.',
      longDescription: 'CashUp is a full-stack payment management system featuring NestJS + TypeScript backend with GraphQL (Apollo Server), MySQL (MikroORM), and Redis. Frontend built with React 18 + Vite, Apollo Client, and Chart.js. Implements JWT authentication with refresh tokens and bcrypt password hashing. Features include role-based authorization (Admin, Moderator, User) with protected routes, GraphQL API with type-safe queries and mutations, real-time payment analytics with interactive charts, secure token management with automatic refresh, Redis-powered session caching, database migrations and seeding with MikroORM, and modern UI with gradient charts and dynamic visualizations. Current focus on modular NestJS backend architecture with guards and decorators, Context API for state management, protected GraphQL resolvers with role validation, automatic token expiration handling, and security best practices with CORS configuration. Working towards creating an intuitive analytics dashboard similar to Stripe\'s interface, with realistic transaction data visualization, revenue tracking, and profit analysis. Building with scalability and security as core priorities.',
      images: ['/project-images/cashup-1.png', '/project-images/cashup-2.png', '/project-images/cashup-3.png', '/project-images/cashup-4.png'],
      technologies: ['NestJS', 'TypeScript', 'GraphQL', 'Apollo Server', 'MySQL', 'MikroORM', 'Redis', 'React 18', 'Vite', 'Apollo Client', 'Chart.js', 'JWT', 'bcrypt'],
      category: 'fullstack',
      github: 'https://github.com/HasaanNasir21/cashup',
      live: 'https://cashup-demo.com',
      featured: true,
      status: 'In Development',
      year: '2024',
      team: 'Solo Developer',
      duration: 'Ongoing',
      highlights: ['Role-Based Authorization', 'Real-Time Analytics', 'GraphQL API', 'JWT Authentication', 'Redis Caching'],
      stats: { stars: 45, views: 1200, likes: 89 }
    },
    {
      id: 2,
      title: 'HotelPulse - Performance Tracking Platform',
      description: 'A performance tracking and benchmarking platform built using Django for the backend and React for the frontend. Helps hotel owners and managers monitor daily performance and compare it with competitors effortlessly.',
      longDescription: 'HotelPulse is a comprehensive hotel performance tracking and benchmarking platform. Users register and input their daily hotel data — occupied rooms and room revenue. The system automatically calculates key performance metrics: MPI (Market Penetration Index), ARI (Average Rate Index), and RGI (Revenue Generation Index). Data is visualized through intuitive graphs that allow users to track performance trends daily, weekly, monthly, and yearly. Users can easily benchmark their hotel\'s performance against competitors and identify opportunities for growth. This project strengthened skills in full-stack development, data visualization, and creating user-centric dashboards, while building a tool that turns raw operational data into actionable insights for the hospitality industry.',
      images: ['/project-images/hotel-pulse-1.jpg', '/project-images/hotel-pulse-2.jpg', '/project-images/hotel-pulse-3.jpg'],
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Chart.js', 'REST API'],
      category: 'fullstack',
      github: 'https://github.com/HasaanNasir21/hotel-pulse-project',
      live: 'https://hotel-pulse-demo.com',
      featured: true,
      status: 'Completed',
      year: '2024',
      team: 'Solo Developer',
      duration: '4 months',
      highlights: ['Performance Metrics Calculation', 'Competitive Benchmarking', 'Data Visualization', 'Trend Analysis'],
      stats: { stars: 52, views: 1500, likes: 95 }
    },
    {
      id: 3,
      title: 'Accountech - AI-Powered Invoice Management',
      description: 'An AI-powered Invoice Management System that transforms raw invoice documents into structured, actionable data — eliminating manual data entry and reducing operational workload.',
      longDescription: 'Accountech is an AI-powered invoice management system that processes invoices automatically. Invoices are uploaded and processed via Google Cloud Vision OCR, OpenAI extracts structured data automatically, and a multilingual keyword engine classifies documents and matches them to the correct client. Data and files are stored securely in MySQL and Cloudinary. Key highlights include support for batch uploads of up to 50 invoices, handling 12+ currencies, requiring zero human intervention, and 158 keywords implemented in English & Spanish for accurate classification. Built with FastAPI backend, Next.js + TypeScript frontend, and integrating Celery + Redis for parallel processing and real-time progress tracking. This project deepened understanding of how OCR, large language models, and scalable backend systems can combine to deliver automation solutions that solve real business problems.',
      images: ['/project-images/crm-accountech-1.jpg', '/project-images/crm-accountech-2.jpg', '/project-images/crm-accountech-3.jpg'],
      technologies: ['FastAPI', 'Next.js', 'TypeScript', 'OpenAI', 'Google Cloud Vision', 'MySQL', 'Cloudinary', 'Celery', 'Redis'],
      category: 'ai',
      github: 'https://github.com/HasaanNasir21/crm-accountech',
      live: 'https://crm-accountech-demo.com',
      featured: true,
      status: 'Completed',
      year: '2024',
      team: 'Team Contributor',
      duration: '6 months',
      highlights: ['OCR Processing', 'AI Data Extraction', 'Multilingual Classification', 'Batch Processing', 'Zero Manual Entry'],
      stats: { stars: 78, views: 2300, likes: 145 }
    },
    {
      id: 4,
      title: 'DraftFlow - Legal-Tech AI Platform',
      description: 'A legal-tech platform with a focus on scalability, reliability, and production-grade architecture. Backend AI pipeline for automating complex legal workflows using LLMs, OCR, vector search, and backend orchestration.',
      longDescription: 'DraftFlow is a comprehensive legal-tech platform featuring LLM-powered intent detection & smart routing that classifies user requests (analyze, generate, query, or modify) using LLM-based classification with confidence scoring. The routing architecture dynamically directs each request to the appropriate service. The contract analysis engine provides clause-level analysis with risk assessment, ambiguity detection, and negotiation guidance, integrating OCR pipeline via Google Vision API for processing PDF, DOCX, and image uploads. Dynamic contract generation implements a human-in-the-loop system where the LLM determines required fields based on contract type (NDA, employment, franchise agreements, etc.), asks contextual follow-up questions, and generates tailored drafts. Conversational contract interaction uses RAG-based Q&A system with Pinecone for vector search and LangChain for orchestration, ensuring accurate reference resolution and preventing cross-contract contamination during multi-document sessions. Tech stack includes Python, FastAPI, LangChain, Pinecone, OpenRouter, Redis, Firebase, and Google Vision API. Working on this project as part of a collaborative team significantly strengthened expertise in applied LLM systems, prompt engineering, vector indexing, retrieval optimization, context isolation, and backend performance tuning.',
      images: ['/project-images/draftflow-1.jfif', '/project-images/draftflow-2.jfif', '/project-images/draftflow-3.jfif', '/project-images/draftflow-4.jfif'],
      technologies: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'OpenRouter', 'Redis', 'Firebase', 'Google Vision API', 'RAG'],
      category: 'ai',
      github: 'https://github.com/HasaanNasir21/draftflow-io',
      live: 'https://draftflow.io',
      featured: true,
      status: 'Completed',
      year: '2024',
      team: 'Collaborative Team',
      duration: '8 months',
      highlights: ['LLM Intent Detection', 'Contract Analysis Engine', 'Dynamic Generation', 'RAG-Based Q&A', 'Vector Search'],
      stats: { stars: 92, views: 3600, likes: 215 }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Solutions', count: projects.length },
    { id: 'fullstack', name: 'Full-Stack Engineering', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ai', name: 'AI/ML Systems', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === projectFilter);

  const nextImage = (projectId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const ProjectCard = ({ project, index }) => {
    const currentIndex = currentImageIndex[project.id] || 0;
    const currentImage = project.images[currentIndex];
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <Card className={`h-full overflow-hidden ${project.featured ? 'ring-2 ring-primary-500/50' : ''}`}>
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={currentImage} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 items-center justify-center text-white text-2xl font-bold">
              {project.title.split(' ').map(word => word[0]).join('')}
            </div>
            
            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  onClick={() => prevImage(project.id, project.images.length)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  onClick={() => nextImage(project.id, project.images.length)}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {project.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        imgIndex === currentIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentImageIndex(prev => ({...prev, [project.id]: imgIndex}))}
                    />
                  ))}
                </div>
              </>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                {project.featured && (
                  <Badge variant="default" className="bg-primary-500/90">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-xl group-hover:text-primary-400 transition-colors">
                {project.title}
              </CardTitle>
              <Badge variant={project.status === 'Completed' ? 'success' : 'warning'}>
                {project.status}
              </Badge>
            </div>
            <div className="flex items-center space-x-4 text-sm text-dark-400">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{project.team}</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-dark-300 leading-relaxed">
              {hoveredProject === project.id ? project.longDescription : project.description}
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-dark-700">
              <div className="flex items-center space-x-4 text-sm text-dark-400">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stats.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{project.stats.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{project.stats.likes}</span>
                </div>
              </div>
              <div className="text-sm text-dark-400">{project.duration}</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <Badge variant="secondary" className="mb-4">
            <Code className="w-3 h-3 mr-1" />
            Engineering Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Engineering Solutions</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A curated collection of production-grade applications showcasing advanced 
            AI integration, scalable architecture, and cutting-edge technology implementation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <div className="flex items-center space-x-2 text-dark-400 mb-4">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={projectFilter === category.id ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setProjectFilter(category.id)}
                className="relative"
              >
                {category.name}
                <Badge variant="outline" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate={controls}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-primary-500/20"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Advanced Engineering Solutions?
          </h3>
          <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
            I specialize in architecting enterprise-grade applications with cutting-edge AI integration, 
            scalable microservices, and high-performance systems. Let's build something extraordinary together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://github.com/HasaanNasir21', '_blank')}
            >
              <Github className="mr-2 w-5 h-5" />
              Explore Technical Architecture on GitHub
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 w-5 h-5" />
              Discuss Your Next Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;