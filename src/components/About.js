import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Server, 
  Zap, 
  Award, 
  Users, 
  Calendar,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Coffee
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { useInView } from '../hooks/useInView';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../lib/utils';

const About = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  const services = [
    {
      icon: Brain,
      title: 'AI/ML Systems Architecture',
      description: 'Engineering sophisticated AI pipelines with LangChain, OpenAI GPT models, and vector databases. Specializing in RAG systems, conversational AI, and intelligent document processing for enterprise applications.',
      color: 'from-purple-500 to-pink-500',
      technologies: ['LangChain', 'OpenAI GPT-4', 'Pinecone', 'Chroma DB']
    },
    {
      icon: Server,
      title: 'High-Performance Backend Engineering',
      description: 'Architecting scalable microservices and APIs using FastAPI, Django REST, and async Python. Building robust, cloud-native systems with advanced caching, database optimization, and real-time capabilities.',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['FastAPI', 'Django', 'PostgreSQL', 'Redis']
    },
    {
      icon: Code2,
      title: 'Full-Stack Solution Development',
      description: 'Creating end-to-end applications with modern React/Next.js frontends and Python backends. Implementing responsive UIs, real-time features, and seamless API integrations with TypeScript and Tailwind CSS.',
      color: 'from-green-500 to-emerald-500',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Zap,
      title: 'Enterprise API & Integration Solutions',
      description: 'Designing RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting. Building webhook systems, third-party integrations, and automated testing suites.',
      color: 'from-orange-500 to-red-500',
      technologies: ['REST APIs', 'GraphQL', 'OAuth 2.0', 'Swagger/OpenAPI']
    }
  ];

  const stats = [
    { 
      icon: Award, 
      value: '50+', 
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various domains'
    },
    { 
      icon: Calendar, 
      value: '3+', 
      label: 'Years Experience',
      description: 'Professional development experience'
    },
    { 
      icon: Users, 
      value: '25+', 
      label: 'Happy Clients',
      description: 'Satisfied clients worldwide'
    },
    { 
      icon: Target, 
      value: '98%', 
      label: 'Success Rate',
      description: 'Project completion and client satisfaction'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Delivering high-quality, optimized, and scalable solutions'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about coding and problem-solving'
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Committed to continuous learning and improvement'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <Badge variant="secondary" className="mb-4">
            <Users className="w-3 h-3 mr-1" />
            Engineering Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Architecting <span className="gradient-text">Tomorrow's Solutions</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Transforming complex business requirements into scalable, intelligent systems 
            through innovative engineering and cutting-edge technology integration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* About Content */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
            initial="initial"
            animate={controls}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Engineering Intelligence Through Code
              </h3>
              
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  I'm a <span className="text-primary-400 font-semibold">Senior Python Architect</span> and 
                  <span className="text-secondary-400 font-semibold"> AI Systems Engineer</span> with 3+ years of experience 
                  designing and implementing enterprise-grade intelligent applications. My expertise lies in 
                  <span className="text-primary-400"> machine learning orchestration</span>, 
                  <span className="text-secondary-400"> generative AI integration</span>, and 
                  <span className="text-primary-400"> high-performance backend systems</span>.
                </p>
                
                <p>
                  I specialize in building <span className="text-secondary-400 font-semibold">production-ready AI pipelines</span> using 
                  advanced frameworks like <span className="text-primary-400">LangChain</span>, 
                  <span className="text-secondary-400">OpenAI GPT models</span>, and 
                  <span className="text-primary-400">vector databases</span>. My technical arsenal includes 
                  <span className="text-secondary-400">FastAPI microservices</span>, 
                  <span className="text-primary-400">Django REST frameworks</span>, and 
                  <span className="text-secondary-400">cloud-native architectures</span> on AWS and GCP.
                </p>
                
                <p>
                  Beyond coding, I'm passionate about <span className="text-primary-400 font-semibold">emerging AI technologies</span>, 
                  <span className="text-secondary-400"> open-source contributions</span>, and 
                  <span className="text-primary-400"> knowledge sharing</span> within the developer ecosystem. 
                  I believe in continuous innovation and staying at the forefront of 
                  <span className="text-secondary-400">AI/ML advancements</span> and 
                  <span className="text-primary-400">software engineering excellence</span>.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-4 rounded-lg bg-dark-800/30 border border-dark-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <value.icon className="w-6 h-6 text-primary-400 mb-2" />
                  <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                  <p className="text-dark-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-8"
            variants={fadeInRight}
            initial="initial"
            animate={controls}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20">
                          <stat.icon className="w-6 h-6 text-primary-400" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-white font-semibold mb-2">{stat.label}</div>
                      <div className="text-dark-400 text-sm">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          animate={controls}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              What I <span className="gradient-text">Offer</span>
            </h3>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Comprehensive development services from AI integration to full-stack solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary-400 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-dark-300 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-primary-500/20"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology 
            and innovative solutions tailored to your needs.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;