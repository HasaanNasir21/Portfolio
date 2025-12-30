import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { useInView } from '../hooks/useInView';
import { fadeInUp, fadeInLeft, fadeInRight } from '../lib/utils';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView();
  const controls = useAnimation();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    watch 
  } = useForm();

  React.useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        icon: '🚀',
      });
      
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 5000,
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hasaanch21@gmail.com',
      href: 'mailto:hasaanch21@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 301-8139012',
      href: 'tel:+923018139012',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Lahore,Pakistan',
      color: 'text-blue-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/HasaanNasir21',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hasaan-nasir-658742353/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/HasaanNasir21',
      color: 'hover:text-sky-400'
    }
  ];

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM PKT' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM PKT' },
    { day: 'Sunday', time: 'By appointment only' }
  ];

  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      validation: { 
        required: 'Name is required',
        minLength: { value: 2, message: 'Name must be at least 2 characters' }
      }
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      validation: { 
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      }
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'What is this about?',
      validation: { 
        required: 'Subject is required',
        minLength: { value: 5, message: 'Subject must be at least 5 characters' }
      }
    }
  ];

  const watchedValues = watch();

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <Badge variant="secondary" className="mb-4">
            <MessageCircle className="w-3 h-3 mr-1" />
            Professional Collaboration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Engineer <span className="gradient-text">Something Extraordinary</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Ready to transform your vision into reality? I specialize in architecting 
            intelligent, scalable solutions using cutting-edge AI and modern engineering practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
            initial="initial"
            animate={controls}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-dark-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span>Availability</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {availability.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    className="flex justify-between items-center p-3 rounded-lg bg-dark-800/30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="text-dark-300">{schedule.day}</span>
                    <span className="text-primary-400 font-medium">{schedule.time}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full bg-dark-800/50 border border-dark-700/50 text-dark-300 transition-all duration-300 hover:scale-110 hover:border-primary-500/50 ${social.color}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={controls}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5 text-primary-400" />
                  <span>Send Me a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <label className="block text-sm font-medium text-dark-300">
                        {field.label}
                        <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className={`w-full px-4 py-3 bg-dark-800/50 border rounded-lg text-white placeholder-dark-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors[field.name] 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-dark-700 hover:border-dark-600'
                          }`}
                          {...register(field.name, field.validation)}
                        />
                        {watchedValues[field.name] && !errors[field.name] && (
                          <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                        )}
                        {errors[field.name] && (
                          <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
                        )}
                      </div>
                      {errors[field.name] && (
                        <motion.p
                          className="text-red-400 text-sm flex items-center space-x-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors[field.name].message}</span>
                        </motion.p>
                      )}
                    </motion.div>
                  ))}

                  {/* Message Field */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-dark-300">
                      Project Details & Requirements
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        rows={5}
                        placeholder="Describe your project requirements, technical challenges, or how I can help architect your next solution..."
                        className={`w-full px-4 py-3 bg-dark-800/50 border rounded-lg text-white placeholder-dark-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-dark-700 hover:border-dark-600'
                        }`}
                        {...register('message', { 
                          required: 'Project details are required',
                          minLength: { value: 20, message: 'Please provide more details about your project (minimum 20 characters)' }
                        })}
                      />
                      {watchedValues.message && !errors.message && (
                        <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-400" />
                      )}
                      {errors.message && (
                        <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-400" />
                      )}
                    </div>
                    {errors.message && (
                      <motion.p
                        className="text-red-400 text-sm flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message.message}</span>
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending Message...'
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-primary-500/20"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Technical Consultation?
          </h3>
          <p className="text-dark-300 mb-6">
            For complex technical discussions, architecture reviews, or urgent project consultations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open('mailto:hasaanch21@gmail.com', '_blank')}
            >
              <Mail className="mr-2 w-5 h-5" />
              Direct Technical Discussion
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://calendly.com/hasaannasir21', '_blank')}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Architecture Review
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;