import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 63 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 55 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 60 },
        { name: 'REST APIs', level: 30 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git', level: 72 },
        { name: 'Vercel', level: 88 },
        { name: 'Vite', level: 68 },
      ],
    },
    {
      title: 'Design & Others',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Figma', level: 45 },
        { name: 'Photoshop', level: 75 },
        { name: 'UI/UX Design', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm constantly learning and adapting to new technologies. Here's an overview of my technical skills
            and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="skill-item"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The tech industry evolves rapidly, and I'm committed to staying current with the latest trends and best practices.
              I'm currently exploring: <strong>Next.js 14, Three.js, and AI/ML integration in web applications</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'Three.js', 'AI/ML', 'Web3', 'Progressive Web Apps'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;