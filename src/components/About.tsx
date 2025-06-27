import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              <motion.div
                className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500 tilt-effect glow-blue"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
  src="https://i.ibb.co/XfT6fcZv/Screenshot-2025-06-27-194441.png"
  alt="Prem Kakade Project Preview"
  className="w-full h-full object-contain rounded-2xl"
/>

              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 floating-element"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 floating-element"
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.div className="flex items-center gap-2 mb-4" variants={itemVariants}>
                <Sparkles className="text-cyan-400" size={24} />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
              </motion.div>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                variants={itemVariants}
              >
                I'm a second-year engineering student and aspiring Data Scientist with hands-on
                experience in machine learning, full-stack development, and solving real-world
                challenges through competitions like the Smart India Hackathon.
              </motion.p>
            </div>

            {/* Education Card */}
            <motion.div
              className="glass-dark p-6 rounded-2xl border border-cyan-500/20 card-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full glow-blue">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 neon-text">Education</h3>
                  <p className="text-lg font-medium text-cyan-300 mb-1">
                    B.Tech in Computer Science and Engineering (Data Science)
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>
                        St. John College of Engineering and Management, Mumbai University
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>2023–2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* More About Me */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text">More About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                Beyond academics, I'm deeply interested in exploring the intersection of data,
                design, and decision-making. I love building intelligent systems and intuitive
                user experiences. I'm committed to continuous learning and believe in building
                projects that matter.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-4" variants={itemVariants}>
              {[
                { label: 'Projects', value: '10+', color: 'from-cyan-400 to-blue-500' },
                { label: 'Technologies', value: '15+', color: 'from-purple-400 to-pink-500' },
                { label: 'Experience', value: '2 Years', color: 'from-green-400 to-emerald-500' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 glass-dark rounded-xl border border-white/10 card-hover"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
