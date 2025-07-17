import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'GAMING WEBSITE 🕹️',
      description: 'Zentry-inspired gaming site. Same energy, new repo.',
      image: '/GAMING-SITE.png',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/itz-anas/gaming-website',
      live: 'https://gaming-website-alphaa.vercel.app/',
      featured: true,
    },
    {
      title: 'PERVUDOCS',
      description: 'Temporary Document Manager.',
      image: '/Pervudocs.png',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn-UI'],
      github: 'https://github.com/itz-anas/PervuDocs',
      live: 'https://pervu-docs.vercel.app/',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 
                ${project.featured ? 'md:col-span-2 flex flex-col md:flex-row' : 'flex flex-col'} 
                bg-white dark:bg-gray-900`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    <Zap className="mr-1" size={16} />
                    Featured
                  </span>
                </div>
              )}

              {/* Image */}
              <div className={`${project.featured ? 'md:w-1/2' : ''} relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`object-cover w-full ${
                    project.featured ? 'h-full md:h-auto' : 'h-56'
                  } group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className={`${project.featured ? 'md:w-1/2' : ''} p-6`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/itz-anas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Github className="mr-2" size={20} />
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
