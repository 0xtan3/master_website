import React from 'react';
import { Github, Linkedin, Twitter, Globe2, Shield, Code2 } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const projects = [
  {
    title: 'Destiny',
    description: 'A comprehensive travel planning application featuring itinerary generation, booking management, and budget tracking.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'SecureAuth System',
    description: 'Enterprise-grade authentication system with advanced security features and multi-factor authentication.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    link: '#',
  },
  {
    title: 'CloudScale Platform',
    description: 'Scalable cloud infrastructure management platform with automated deployment and monitoring.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'Docker', 'AWS'],
    link: '#',
  },
];

const skills = [
  'React', 'React Native', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL',
  'Docker', 'AWS', 'Node.js', 'TypeScript', 'Cybersecurity', 'DevOps'
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="text-center mb-16 animate-fade-in">
          <img
            src={profilePic}
            alt="Akilesh Jayaraman"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover hover-scale"
          />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Akilesh Jayaraman
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Founder & Tech Lead at Tenazity
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover-scale">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover-scale">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover-scale">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8 stagger-animation">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover-scale animate-fade-in"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-fade-in">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover-lift animate-fade-in"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-sm hover-scale"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center transition-colors duration-300"
                  >
                    View Project
                    <Globe2 className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover-lift animate-fade-in">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Security Expertise
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              With a strong background in cybersecurity, we integrate advanced security measures
              into every project from the ground up, ensuring your digital assets are protected
              with industry-leading practices.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover-lift animate-fade-in">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Technical Leadership
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Leading a versatile team skilled in modern technologies and development practices,
              we deliver scalable solutions that grow with your business while maintaining
              the highest standards of code quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}