import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 md:px-0">
            I'm a passionate developer who loves creating beautiful and functional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-white dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I build scalable web applications using modern technologies and best practices.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-white dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I create intuitive and visually appealing interfaces that users love.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Strategy</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I help businesses grow their online presence and reach their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;