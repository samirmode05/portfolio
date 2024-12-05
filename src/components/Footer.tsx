import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Samir Mode</h3>
            <p className="text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-white">Education</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/samirmode05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/samir-mode-iitm24f" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/samirr.mode_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="mailto:samirmode763@gmail.com" 
                className="text-gray-400 hover:text-white"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Samir Mode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;