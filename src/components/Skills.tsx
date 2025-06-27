import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, BarChart3, Wrench, Users, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'R', 'Java', 'SQL'],
      color: 'from-blue-500 to-purple-600',
      glowColor: 'glow-blue',
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras'],
      color: 'from-green-500 to-cyan-600',
      glowColor: 'glow-green',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
      color: 'from-orange-500 to-red-600',
      glowColor: 'glow-pink',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'Docker', 'Jupyter', 'Google Colab', 'Tableau'],
      color: 'from-purple-500 to-pink-600',
      glowColor: 'glow-purple',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Problem-solving', 'Teamwork', 'Time Management', 'Communication'],
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'glow-blue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 212, 255, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0, 212, 255, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(139, 92, 246, 0.1) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
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
              <h2 className="text-4xl md:text-5xl font-bold text-white neon-text">Skills & Expertise</h2>
              <Sparkles className="text-purple-400" size={24} />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-dark rounded-2xl p-8 border border-white/10 card-hover tilt-effect"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white ${category.glowColor}`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <category.icon size={24} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white neon-text">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <motion.div
                        className="bg-white/5 rounded-lg px-4 py-3 text-gray-300 font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-pointer border border-white/5 hover:border-cyan-500/30"
                        whileHover={{ x: 4, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Proficiency Visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: 'Python', level: 90, color: 'from-cyan-400 to-blue-500' },
                { skill: 'Data Analysis', level: 85, color: 'from-green-400 to-emerald-500' },
                { skill: 'Machine Learning', level: 80, color: 'from-purple-400 to-pink-500' },
                { skill: 'Web Development', level: 75, color: 'from-orange-400 to-red-500' },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  className="glass-dark rounded-2xl p-6 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-white">{item.skill}</span>
                    <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className={`skill-progress bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;