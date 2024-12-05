import React from 'react';
import { ArrowRight } from 'lucide-react';
import BackgroundGraphics from './BackgroundGraphics';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden pt-20 md:pt-0">
      <BackgroundGraphics />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Aspiring Data Scientist and ML Engineer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4 md:px-0">
            Passionate about turning data into actionable insights and building intelligent systems. Currently diving deep into quantitative trading, machine learning, and data visualization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 md:px-0">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;