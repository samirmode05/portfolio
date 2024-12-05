import React from 'react';

const GridPattern = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/[0.02] to-transparent dark:via-gray-100/[0.02]" />
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {[...Array(144)].map((_, i) => (
          <div
            key={i}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 border border-current opacity-[0.03] dark:opacity-[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-current opacity-[0.01]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPattern;