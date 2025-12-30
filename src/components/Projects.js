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
      title: 'Hotel Pulse Analytics Engine',
      description: 'Enterprise-grade hotel performance analytics platform leveraging advanced mathematical algorithms and real-time data processing. Features predictive analytics, competitive benchmarking, and comprehensive business intelligence dashboards.',
      longDescription: 'A sophisticated hotel management and analytics platform engineered with microservices architecture. The system processes massive datasets using advanced statistical models and machine learning algorithms to provide actionable business insights. Features include real-time performance monitoring, predictive revenue optimization, and competitive market analysis with automated reporting capabilities.',
      images: ['/project-images/hotel-pulse-1.jpg', '/project-images/hotel-pulse-2.jpg', '/project-images/hotel-pulse-3.jpg'],
      technologies: ['Python', 'Django REST Framework', 'React', 'PostgreSQL', 'Redis', 'Chart.js', 'AWS Lambda', 'Docker'],
      category: 'fullstack',
      github: 'https://github.com/HasaanNasir21/hotel-pulse-project',
      live: 'https://hotel-pulse-demo.com',
      featured: true,
      status: 'Production Ready',
      year: '2024',
      team: '3 Senior Engineers',
      duration: '4 months',
      highlights: ['Real-time Analytics Engine', 'Predictive Revenue Modeling', 'Competitive Intelligence Dashboard'],
      stats: { stars: 45, views: 1200, likes: 89 }
    },
    {
      id: 2,
      title: 'CRM-Accountech AI Document Processor',
      description: 'Intelligent legal document management system powered by advanced NLP and computer vision. Automates invoice processing, multilingual document translation, and intelligent categorization using state-of-the-art AI models.',
      longDescription: 'An AI-powered CRM system specifically engineered for legal professionals, featuring advanced OCR capabilities, multilingual NLP processing, and intelligent document classification. The platform integrates OpenAI GPT models with Google Vision API to achieve 99.2% accuracy in document processing across multiple languages and formats.',
      images: ['/project-images/crm-accountech-1.jpg', '/project-images/crm-accountech-2.jpg', '/project-images/crm-accountech-3.jpg'],
      technologies: ['Python', 'FastAPI', 'Next.js', 'OpenAI GPT-4', 'Google Vision API', 'PostgreSQL', 'Docker', 'Kubernetes'],
      category: 'ai',
      github: 'https://github.com/HasaanNasir21/crm-accountech',
      live: 'https://crm-accountech-demo.com',
      featured: true,
      status: 'Enterprise Production',
      year: '2024',
      team: '2 AI Engineers',
      duration: '6 months',
      highlights: ['Advanced OCR Processing', 'Multilingual AI Translation', 'Intelligent Document Classification'],
      stats: { stars: 67, views: 2100, likes: 134 }
    },
    {
      id: 3,
      title: 'DraftFlow.io Legal AI Platform',
      description: 'Revolutionary contract generation platform utilizing advanced LangChain orchestration and multi-agent AI systems. Generates legally compliant documents with court-admissible accuracy across multiple jurisdictions.',
      longDescription: 'A cutting-edge legal document generation platform powered by sophisticated AI orchestration using LangChain and LangGraph. The system employs multi-agent AI workflows to ensure legal compliance, jurisdiction-specific requirements, and court-admissible document quality. Features advanced template engines, legal knowledge graphs, and automated compliance checking.',
      images: ['/project-images/draftflow-1.jpg', '/project-images/draftflow-2.jpg'],
      technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Flutter', 'OpenAI GPT-4', 'Pinecone Vector DB', 'AWS Lambda'],
      category: 'ai',
      github: 'https://github.com/HasaanNasir21/draftflow-io',
      live: 'https://draftflow.io',
      featured: true,
      status: 'Active Development',
      year: '2024',
      team: '4 Full-Stack Engineers',
      duration: '8 months',
      highlights: ['Multi-Agent AI Orchestration', 'Legal Compliance Engine', 'Cross-Platform Deployment'],
      stats: { stars: 89, views: 3400, likes: 201 }
    },
    {
      id: 4,
      title: 'Enterprise AI Chat Infrastructure',
      description: 'Scalable conversational AI platform with custom model integration, advanced context management, and enterprise-grade security. Built for high-throughput business applications with real-time processing capabilities.',
      longDescription: 'A comprehensive enterprise AI chat platform designed for scalable business applications. Features custom model integration, advanced conversation state management, and real-time WebSocket communication. The system supports multiple AI providers, custom fine-tuned models, and enterprise security standards with role-based access control.',
      images: ['/project-images/ai-chat-1.jpg'],
      technologies: ['Python', 'FastAPI', 'WebSocket', 'React', 'LangChain', 'Pinecone', 'Redis', 'PostgreSQL'],
      category: 'ai',
      github: 'https://github.com/HasaanNasir21/ai-chat-platform',
      live: 'https://ai-chat-demo.com',
      featured: false,
      status: 'Production Ready',
      year: '2023',
      team: '2 Backend Engineers',
      duration: '3 months',
      highlights: ['Real-time AI Processing', 'Custom Model Integration', 'Enterprise Security'],
      stats: { stars: 32, views: 890, likes: 56 }
    },
    {
      id: 5,
      title: 'E-commerce Intelligence Dashboard',
      description: 'Advanced analytics platform with machine learning-powered insights, predictive inventory management, and real-time customer behavior analysis. Features automated reporting and business intelligence capabilities.',
      longDescription: 'A powerful analytics platform providing deep insights into e-commerce operations through advanced data visualization and machine learning algorithms. The system features predictive analytics for inventory management, customer behavior analysis, and automated business intelligence reporting with real-time dashboard updates.',
      images: ['/project-images/ecommerce-1.jpg'],
      technologies: ['Python', 'Django', 'React', 'D3.js', 'PostgreSQL', 'Celery', 'Docker', 'AWS'],
      category: 'fullstack',
      github: 'https://github.com/HasaanNasir21/ecommerce-analytics',
      live: 'https://ecommerce-analytics-demo.com',
      featured: false,
      status: 'Production Ready',
      year: '2023',
      team: '3 Data Engineers',
      duration: '5 months',
      highlights: ['Predictive Analytics Engine', 'Real-time Data Processing', 'Custom BI Dashboards'],
      stats: { stars: 28, views: 650, likes: 41 }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Solutions', count: projects.length },
    { id: 'fullstack', name: 'Full-Stack Engineering', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ai', name: 'AI/ML Systems', count: projects.filter(p => p.category === 'ai').length },
    { id: 'backend', name: 'Backend Architecture', count: projects.filter(p => p.category === 'backend').length }
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