import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin,
  Code,
  Zap,
  Coffee
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'AI/ML Systems Architecture',
    'Enterprise Backend Engineering',
    'Microservices & API Development',
    'Full-Stack Solution Design',
    'Technical Architecture Consulting',
    'Performance Optimization & Scaling'
  ];

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
      icon: Twitter,
      href: 'https://twitter.com/HasaanNasir21',
      label: 'Twitter',
      color: 'hover:text-sky-400'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'hasaanch21@gmail.com',
      href: 'mailto:hasaanch21@gmail.com'
    },
    {
      icon: Phone,
      text: '+92 301-8139012',
      href: 'tel:+923018139012'
    },
    {
      icon: MapPin,
      text: 'Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Lahore,Pakistan'
    }
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  HN
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Hasaan Nasir</div>
                  <div className="text-primary-400 text-sm">Python Developer & AI Engineer</div>
                </div>
              </div>
              
              <p className="text-dark-300 leading-relaxed">
                Engineering intelligent, enterprise-grade solutions with cutting-edge AI integration 
                and scalable Python architectures. Transforming complex business challenges into 
                elegant, high-performance applications.
              </p>

              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  <Code className="w-3 h-3 mr-1" />
                  Available for enterprise projects
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  Global remote collaboration
                </Badge>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-dark-800/50 border border-dark-700/50 text-dark-300 transition-all duration-300 hover:scale-110 hover:border-primary-500/50 ${social.color}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    className="text-dark-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Discuss Your Project
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="py-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-dark-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Hasaan Nasir. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
            <span>using React & Tailwind CSS</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 hover:bg-primary-500/30 hover:scale-110 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
            <span className="sr-only">Scroll to top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;