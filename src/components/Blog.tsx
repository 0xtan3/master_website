import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Building Secure Web Applications: Best Practices',
    excerpt: 'Learn about the essential security practices that every web application should implement to protect user data and prevent common vulnerabilities.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'The Future of App Development with React Native',
    excerpt: 'Explore how React Native is revolutionizing mobile app development and why it is becoming the go-to choice for cross-platform applications.',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Scaling Your Web Application: A Practical Guide',
    excerpt: 'Discover the strategies and best practices for scaling your web application to handle growing user demands efficiently.',
    date: '2024-03-05',
    readTime: '10 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];

const categories = [
  'All',
  'Web Development',
  'App Development',
  'Cybersecurity',
  'DevOps',
  'Tech Insights',
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts and advice on web development, security, and technology
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium
                       bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400
                       hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400
                       transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.category}
                  </span>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}