import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Database, 
  Server, 
  Globe, 
  Smartphone,
  Zap,
  GitBranch,
  Cloud,
  Cpu,
  Bot,
  Layers,
  Terminal,
  Workflow
} from 'lucide-react';
import { 
  SiPython, 
  SiDjango, 
  SiFastapi, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiLinux,
  SiNginx,
  SiElasticsearch,
  SiGraphql,
  SiSocketdotio
} from 'react-icons/si';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { useInView } from '../hooks/useInView';
import { useStore } from '../store/useStore';
import { fadeInUp, staggerContainer } from '../lib/utils';

const Skills = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const { skillsAnimated, setSkillsAnimated } = useStore();

  useEffect(() => {
    if (inView && !skillsAnimated) {
      controls.start('animate');
      setSkillsAnimated(true);
    }
  }, [inView, controls, skillsAnimated, setSkillsAnimated]);

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python Programming', icon: SiPython, level: 95, description: 'Core language expertise' },
        { name: 'Django REST Framework', icon: SiDjango, level: 90, description: 'RESTful API development' },
        { name: 'FastAPI Framework', icon: SiFastapi, level: 92, description: 'High-performance async APIs' },
        { name: 'RESTful API Design', icon: Zap, level: 88, description: 'API architecture & best practices' },
        { name: 'Authentication & Authorization', icon: Server, level: 85, description: 'Security implementation' },
        { name: 'Postman Testing', icon: SiPostman, level: 87, description: 'API testing & documentation' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React.js Framework', icon: SiReact, level: 88, description: 'Modern UI development' },
        { name: 'Next.js Framework', icon: SiNextdotjs, level: 82, description: 'Full-stack React framework' },
        { name: 'Web Development', icon: Globe, level: 90, description: 'Responsive web applications' },
        { name: 'TypeScript', icon: SiTypescript, level: 80, description: 'Type-safe JavaScript' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Generative AI', icon: SiOpenai, level: 85, description: 'AI-powered applications' },
        { name: 'LangChain Framework', icon: Bot, level: 88, description: 'LLM application development' },
        { name: 'Large Language Models', icon: Bot, level: 82, description: 'LLM integration & fine-tuning' }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL Database', icon: SiMysql, level: 87, description: 'Relational database design' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90, description: 'Advanced SQL database' },
        { name: 'Vector Databases', icon: Database, level: 80, description: 'AI embeddings storage' },
        { name: 'Firebase', icon: Database, level: 75, description: 'Real-time database' },
        { name: 'Redis', icon: SiRedis, level: 78, description: 'Caching & session management' }
      ]
    },
    {
      title: 'DevOps & Deployment',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', icon: SiDocker, level: 85, description: 'Containerization' },
        { name: 'Git Version Control', icon: SiGit, level: 92, description: 'Source code management' },
        { name: 'Deployment', icon: Cloud, level: 83, description: 'Application deployment' }
      ]
    },
    {
      title: 'Backend Frameworks',
      icon: Layers,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'NestJS Framework', icon: Server, level: 75, description: 'Node.js backend framework' }
      ]
    }
  ];

  const certifications = [
    'Python Programming',
    'Django REST Framework',
    'FastAPI Framework',
    'React.js Development',
    'MySQL Database',
    'PostgreSQL',
    'Generative AI',
    'LangChain Framework',
    'Web Development',
    'Deployment',
    'Large Language Models',
    'Vector Databases',
    'Firebase',
    'Docker',
    'Git',
    'Redis',
    'Authentication & Authorization',
    'Next.js',
    'NestJS Framework',
    'RESTful API',
    'Postman Testing'
  ];

  const SkillBar = ({ skill, index, categoryIndex }) => (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30">
            <skill.icon className="w-5 h-5 text-primary-400" />
          </div>
          <div>
            <h4 className="text-white font-medium">{skill.name}</h4>
            <p className="text-dark-400 text-sm">{skill.description}</p>
          </div>
        </div>
        <span className="text-primary-400 font-semibold text-sm">{skill.level}%</span>
      </div>
      
      <div className="relative h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: categoryIndex * 0.1 + index * 0.05, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <Badge variant="secondary" className="mb-4">
            <Code2 className="w-3 h-3 mr-1" />
            Technical Mastery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Mastering cutting-edge technologies and frameworks to build next-generation 
            intelligent applications and scalable enterprise solutions
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate={controls}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex} 
                      categoryIndex={categoryIndex} 
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Additional Skills */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Professional <span className="gradient-text">Skills & Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Badge variant="outline" className="text-sm py-2 px-4">
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={controls}
          >
            {[
              { label: 'Years of Experience', value: '1+' },
              { label: 'Technologies Mastered', value: '20+' },
              { label: 'AI Projects Deployed', value: '1' },
              { label: 'APIs Architected', value: '10+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-dark-800/50 border border-dark-700/50"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;