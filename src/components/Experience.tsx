import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Building, Globe, Award, ExternalLink, Sparkles } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Smart India Hackathon 2024 – Grand Finale Finalist',
      organization: 'Government of India',
      description: 'Selected as a finalist with Team Data Minds. Designed and developed a mobile and web solution for the Department of Post, Government of India.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      period: '2024',
      glowColor: 'glow-yellow',
    },
    {
      title: 'Internship at NPCIL – TAPS',
      organization: 'Tarapur Atomic Power Station',
      description: 'Built a Vehicle Requisition System during my internship at Tarapur Atomic Power Station (NPCIL).',
      icon: Building,
      color: 'from-green-400 to-blue-500',
      period: '2024',
      glowColor: 'glow-green',
    },
    {
      title: 'SevaFlow Website',
      organization: 'Personal Project',
      description: 'Developed and deployed a live website to streamline services with my friend Adarsh.',
      link: 'https://sevaflowwebsite.web.app',
      icon: Globe,
      color: 'from-purple-400 to-pink-500',
      period: '2024',
      glowColor: 'glow-purple',
    },
    {
      title: 'Altair Data Science Master Internship',
      organization: 'Eduskills',
      description: 'Completed a rigorous online internship focused on data science workflows, machine learning, and evaluation using Altair tools.',
      icon: Award,
      color: 'from-blue-400 to-cyan-500',
      period: '2024',
      glowColor: 'glow-blue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-cyan-400" size={24} />
              <h2 className="text-4xl md:text-5xl font-bold text-white neon-text">Experience</h2>
              <Sparkles className="text-purple-400" size={24} />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My journey through impactful projects, internships, and competitions
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  className="glass-dark rounded-2xl p-8 border border-white/10 card-hover"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <motion.div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${experience.color} flex items-center justify-center ${experience.glowColor} tilt-effect`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <experience.icon className="text-white" size={28} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 neon-text">
                            {experience.title}
                          </h3>
                          <p className="text-cyan-400 font-semibold mb-2">
                            {experience.organization}
                          </p>
                        </div>
                        <div className="text-gray-400 font-medium bg-gradient-to-r from-cyan-400/20 to-purple-400/20 px-3 py-1 rounded-full">
                          {experience.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      {experience.link && (
                        <motion.a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold interactive neon-text"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          View Live Site
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center my-4">
                    <motion.div
                      className="w-0.5 h-8 bg-gradient-to-b from-cyan-400/50 to-purple-400/50"
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;