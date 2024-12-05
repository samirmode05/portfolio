import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BS in Data Science and Applications",
      institution: "Indian Institute of Technology Madras",
      location: "Chennai, India(Remote)",
      period: "2024 - Present",
      description: "Specializing in Business Analytics and Digital Strategy"
    },
    {
      degree: "Bachelor of Technology",
      institution: "VJTI Mumbai",
      location: "Mumbai, India",
      period: "2023 - 2027",
      description: "Major in Electronics & Telecommunications with Minor in AIML"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg transition-colors"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white dark:text-gray-900" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;