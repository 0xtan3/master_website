import React from 'react';
import { Globe, Smartphone, Shield, Code, Database, Cloud } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies and optimized for performance and SEO.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Cross-platform mobile and web applications designed for seamless user experience and functionality.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Advanced security measures and best practices integrated into every project from the ground up.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Maintainable, well-documented code following industry best practices and design patterns.',
  },
  {
    icon: Database,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business, handling increased loads efficiently.',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless integration with leading cloud platforms for reliable and scalable deployments.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover-lift animate-fade-in"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 ring-4 ring-white dark:ring-gray-800 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}