import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2022-Present',
      title: 'Bachelor of Engineering',
      company: 'Guru Nanak Dev Engineering College,Bidar',
      description: ' Computer Science and Engineering - CGPA : 7.0',
    },
    {
      year: '2020-2022',
      title: 'PUC',
      company: 'SHAHEEN PU COLLEGE',
      description: 'SCIENCE STREAM - 75%',
    },
  ];

  const skills = [
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 63 },
    { name: 'Node.js', level: 50 },
    { name: 'CSS/Tailwind', level: 55 },
    { name: 'Git', level: 50 },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I’m a web developer and final-year engineering student with a knack for crafting clean, functional, and visually appealing web applications. With over a year of experience, I focus on delivering real value through thoughtful design and efficient code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Calendar className="mr-3 text-blue-600" size={24} />
               Education
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Code className="mr-3 text-purple-600" size={24} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="skill-item"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <Heart className="text-red-500 mr-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  What I Love
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I'm passionate about creating seamless user experiences, staying up-to-date with the latest
                web technologies, and contributing to open-source projects. When I'm not coding, you'll find me
                exploring new design trends or learning about emerging technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;