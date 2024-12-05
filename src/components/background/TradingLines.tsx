import React from 'react';

const TradingLines = () => {
  const generatePath = () => {
    const points = [...Array(30)].map((_, i) => {
      const x = i * 20;
      const y = 100 + Math.sin(i * 0.3) * 50 + Math.cos(i * 0.2) * 30;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return points;
  };

  return (
    <div className="absolute inset-0">
      <svg width="100%" height="100%" className="opacity-[0.15] dark:opacity-[0.08]">
        {/* Main trend line */}
        <path
          d={generatePath()}
          className="stroke-blue-500 dark:stroke-blue-400"
          fill="none"
          strokeWidth="2"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values={`${generatePath()};${generatePath()};${generatePath()}`}
          />
        </path>
        
        {/* Secondary trend lines */}
        <path
          d={generatePath()}
          className="stroke-purple-500 dark:stroke-purple-400 translate-y-20"
          fill="none"
          strokeWidth="1.5"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values={`${generatePath()};${generatePath()};${generatePath()}`}
          />
        </path>
      </svg>
    </div>
  );
};

export default TradingLines;