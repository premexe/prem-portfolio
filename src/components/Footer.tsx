import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black py-12 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="text-cyan-400" size={20} />
              <h3 className="text-2xl font-bold text-gradient neon-text">
                Prem Kakade
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Data Scientist passionate about turning data into meaningful insights and solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white neon-text">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 interactive"
                  whileHover={{ x: 4 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white neon-text">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:premkakade2021@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 interactive"
              >
                <Mail size={18} />
                <span>premkakade2021@gmail.com</span>
              </a>
              <div className="flex gap-4 pt-2">
                <motion.a
                  href="https://github.com/premexe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-dark rounded-lg hover:glow-blue transition-all duration-200 interactive tilt-effect"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} className="text-gray-300" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/premexe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-dark rounded-lg hover:glow-blue transition-all duration-200 interactive tilt-effect"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} className="text-blue-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Prem Kakade. Made with <Heart size={16} className="text-red-500 animate-pulse" /> and lots of coffee.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:glow-blue transition-all duration-200 interactive"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;