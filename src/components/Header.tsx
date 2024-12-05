import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gray-950 dark:bg-black border-b border-gray-800 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">Samir Mode</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-200 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a>
            <a href="#education" className="text-gray-200 hover:text-white transition-colors">Education</a>
            <a href="#projects" className="text-gray-200 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Links and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://leetcode.com/samirmode05/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
              title="LeetCode"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/samirmode05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/samir-mode-iitm24f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/samirr.mode_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:samirmode763@gmail.com"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="text-gray-200 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-950 dark:bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-200 hover:text-white transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-200 hover:text-white transition-colors">About</a>
            <a href="#education" className="block px-3 py-2 text-gray-200 hover:text-white transition-colors">Education</a>
            <a href="#projects" className="block px-3 py-2 text-gray-200 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-200 hover:text-white transition-colors">Contact</a>
            <div className="flex space-x-4 px-3 py-2">
              <a 
                href="https://leetcode.com/u/samirfbtl05/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/samirmode05"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/samir-mode-iitm24f"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/samirr.mode_/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:samirmode763@gmail.com"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;