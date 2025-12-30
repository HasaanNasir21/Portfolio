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
      title: 'AI/ML & Intelligent Systems',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Large Language Models (LLMs)', icon: SiOpenai, level: 95, description: 'GPT-4, Claude, Llama fine-tuning' },
        { name: 'LangChain Orchestration', icon: Bot, level: 92, description: 'Advanced AI workflow automation' },
        { name: 'TensorFlow & Keras', icon: SiTensorflow, level: 88, description: 'Deep learning model development' },
        { name: 'PyTorch & Lightning', icon: SiPytorch, level: 85, description: 'Research-grade neural networks' },
        { name: 'Generative AI Systems', icon: Bot, level: 94, description: 'Text, image, code generation pipelines' },
        { name: 'Vector Database Engineering', icon: Database, level: 90, description: 'Pinecone, Weaviate, Chroma optimization' }
      ]
    },
    {
      title: 'Backend & Systems Engineering',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python Architecture', icon: SiPython, level: 98, description: 'Advanced OOP, async programming' },
        { name: 'FastAPI Microservices', icon: SiFastapi, level: 96, description: 'High-performance async APIs' },
        { name: 'Django Enterprise', icon: SiDjango, level: 92, description: 'Scalable web applications' },
        { name: 'GraphQL Federation', icon: SiGraphql, level: 87, description: 'Distributed API architecture' },
        { name: 'WebSocket Real-time', icon: SiSocketdotio, level: 84, description: 'Live data streaming systems' },
        { name: 'Microservices Architecture', icon: Layers, level: 90, description: 'Distributed system design patterns' }
      ]
    },
    {
      title: 'Database & Data Engineering',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PostgreSQL Advanced', icon: SiPostgresql, level: 92, description: 'Complex queries, optimization, partitioning' },
        { name: 'MongoDB Aggregation', icon: SiMongodb, level: 89, description: 'Document modeling, indexing strategies' },
        { name: 'MySQL Performance', icon: SiMysql, level: 87, description: 'Query optimization, replication' },
        { name: 'Redis Caching', icon: SiRedis, level: 85, description: 'Advanced caching patterns, pub/sub' },
        { name: 'Elasticsearch Analytics', icon: SiElasticsearch, level: 82, description: 'Full-text search, log analysis' },
        { name: 'Vector Databases', icon: Database, level: 88, description: 'Similarity search, embeddings storage' }
      ]
    },
    {
      title: 'Cloud & DevOps Engineering',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS Cloud Architecture', icon: SiAmazonaws, level: 90, description: 'EC2, Lambda, RDS, S3, CloudFormation' },
        { name: 'Google Cloud Platform', icon: SiGooglecloud, level: 84, description: 'GKE, Cloud Functions, BigQuery' },
        { name: 'Docker Containerization', icon: SiDocker, level: 92, description: 'Multi-stage builds, optimization' },
        { name: 'Kubernetes Orchestration', icon: SiKubernetes, level: 78, description: 'Pod management, service mesh' },
        { name: 'Linux System Administration', icon: SiLinux, level: 87, description: 'Server hardening, automation' },
        { name: 'Nginx Load Balancing', icon: SiNginx, level: 83, description: 'Reverse proxy, SSL termination' }
      ]
    },
    {
      title: 'Frontend & User Experience',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React Ecosystem', icon: SiReact, level: 90, description: 'Hooks, Context, Performance optimization' },
        { name: 'Next.js Full-Stack', icon: SiNextdotjs, level: 87, description: 'SSR, API routes, deployment' },
        { name: 'TypeScript Advanced', icon: SiTypescript, level: 85, description: 'Type safety, generics, decorators' },
        { name: 'Tailwind CSS Mastery', icon: SiTailwindcss, level: 93, description: 'Custom components, responsive design' },
        { name: 'Flutter Cross-Platform', icon: Smartphone, level: 80, description: 'Mobile app development' },
        { name: 'Progressive Web Apps', icon: Globe, level: 82, description: 'Service workers, offline capabilities' }
      ]
    },
    {
      title: 'Development & Integration Tools',
      icon: Workflow,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'Git Advanced Workflows', icon: SiGit, level: 94, description: 'Branching strategies, CI/CD integration' },
        { name: 'API Testing & Documentation', icon: SiPostman, level: 90, description: 'Automated testing, OpenAPI specs' },
        { name: 'CI/CD Pipeline Engineering', icon: GitBranch, level: 87, description: 'GitHub Actions, Jenkins automation' },
        { name: 'Terminal & Shell Scripting', icon: Terminal, level: 92, description: 'Bash, PowerShell automation' },
        { name: 'RESTful API Design', icon: Zap, level: 95, description: 'OpenAPI, versioning, rate limiting' },
        { name: 'Performance Optimization', icon: Cpu, level: 88, description: 'Profiling, caching, load testing' }
      ]
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer Associate',
    'OpenAI API Specialist Certification',
    'LangChain Advanced Practitioner',
    'Docker Certified Associate Professional'
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
            Professional <span className="gradient-text">Certifications & Expertise</span>
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
              { label: 'Years of Professional Experience', value: '3+' },
              { label: 'Advanced Technologies Mastered', value: '35+' },
              { label: 'Production AI Models Deployed', value: '25+' },
              { label: 'Enterprise APIs Architected', value: '150+' }
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