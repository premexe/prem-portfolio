import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/portfolio-site/Prem_Kakade_Resume.pdf"; // For GitHub Pages
    link.download = "Prem_Kakade_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Holographic Motion Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30 holographic"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 rounded-full opacity-30 holographic"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">

          {/* Avatar */}
          <motion.div
            className="mb-8 mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden tilt-effect glow-blue"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img
              src="https://i.ibb.co/4Znvph9T/IMG-20230911-181537-684.jpg"
              alt="Prem Kakade"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="text-cyan-400" size={20} />
              <p className="text-lg text-gray-300">Hi, I'm Prem Kakade 👋</p>
              <Sparkles className="text-purple-400" size={20} />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient neon-text">Data</span><br />
              <span className="text-white">Scientist</span>
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-cyan-300 mb-8 font-light neon-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Turning data into Insights
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A data enthusiast passionate about solving real-world problems using data and code.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Resume Button */}
            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 rounded-xl neon-button shadow-lg interactive tilt-effect"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="text-white" />
              <span className="text-white font-semibold">Download Resume</span>
            </motion.button>

            {/* Social Icons */}
            <motion.div className="flex gap-4">
              <motion.a
                href="https://github.com/premexe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-dark hover:glow-blue transition-all duration-300 interactive tilt-effect"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} className="text-gray-300" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/premexe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-dark hover:glow-blue transition-all duration-300 interactive tilt-effect"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} className="text-blue-400" />
              </motion.a>

              <motion.a
                href="mailto:premkakade2021@gmail.com"
                className="p-3 rounded-full glass-dark hover:glow-blue transition-all duration-300 interactive tilt-effect"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} className="text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="animate-bounce interactive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={32} className="text-cyan-400 neon-text" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
