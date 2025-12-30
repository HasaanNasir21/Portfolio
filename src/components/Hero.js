import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronDown,
  Code2,
  Brain,
  Zap,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { useInView } from '../hooks/useInView';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../lib/utils';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const roles = [
    'Full-Stack Python Architect',
    'AI/ML Solutions Engineer', 
    'Backend Systems Specialist',
    'LLM Integration Expert',
    'Cloud-Native Developer',
    'API Design Architect'
  ];

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/HasaanNasir21', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/hasaan-nasir-658742353/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:hasaannasir21@gmail.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Code2 },
    { label: 'Projects Completed', value: '50+', icon: Zap },
    { label: 'AI Models Integrated', value: '15+', icon: Brain },
  ];

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <section 
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10 animate-gradient bg-[length:200%_200%]" />
        {floatingElements}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate={controls}
        >
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            variants={fadeInLeft}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="default" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Available for new projects
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow"
                variants={fadeInUp}
              >
                <span className="text-dark-300 font-light">Hello World! I'm</span>{' '}
                <span className="gradient-text block mt-2">
                  Muhammad Hasaan Nasir
                </span>
              </motion.h1>
              
              <motion.div 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-dark-300"
                variants={fadeInUp}
              >
                <span className="gradient-text">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-dark-300 max-w-2xl leading-relaxed"
              variants={fadeInUp}
            >
              Crafting intelligent digital ecosystems with <span className="text-primary-400 font-semibold">Python</span> and 
              <span className="text-secondary-400 font-semibold"> AI/ML</span>. I architect scalable solutions using 
              cutting-edge technologies like <span className="text-primary-400">LangChain</span>, 
              <span className="text-secondary-400"> FastAPI</span>, and 
              <span className="text-primary-400"> Generative AI</span> to transform complex business challenges 
              into elegant, high-performance applications.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 py-6"
              variants={fadeInUp}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 text-dark-300 transition-all duration-300 hover:scale-110 hover:bg-dark-700/50 ${social.color}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={fadeInRight}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20 animate-pulse-slow" />
              
              {/* Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-500 to-secondary-500 p-1">
                  <img
                    src="/profile-photo.jpg"
                    alt="Muhammad Hasaan Nasir"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full items-center justify-center text-white text-6xl font-bold">
                    HN
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { icon: '🐍', position: 'top-4 -right-4' },
                { icon: '🤖', position: 'bottom-8 -left-8' },
                { icon: '⚡', position: 'top-1/2 -left-4' },
                { icon: '🚀', position: 'bottom-4 -right-8' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-xl border border-dark-700/50`}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center text-dark-400 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;