import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Web Developer', 'Frontend Developer', 'Inquisitive', 'Creative Thinker'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const handleDownloadResume = () => {
  window.open(
    'https://drive.google.com/file/d/1p0fMr_qxHxkAvxv7Tsgfv27Svrbz-d-q/view?usp=sharing',
    '_blank'
  );
};

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-white dark:ring-gray-700"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anas</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12"
        >
          <span>a </span>
          <span className="text-purple-600 dark:text-purple-400 font-medium">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          An aspiring web developer and final-year engineering student at GNDECB, VTU, passionate about blending creativity with code to build engaging, user-friendly digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
