import React from 'react';

const CandlestickChart = () => {
  const generateCandlestick = (index: number) => {
    const height = 20 + Math.random() * 40;
    const wickHeight = height + Math.random() * 20;
    const isPositive = Math.random() > 0.5;
    const color = isPositive ? 'fill-green-500' : 'fill-red-500';
    
    return (
      <g key={index} transform={`translate(${index * 20}, 0)`}>
        <line 
          x1="10" 
          y1={10}
          x2="10" 
          y2={wickHeight}
          className="stroke-current"
          strokeWidth="1"
        />
        <rect 
          x="6"
          y={isPositive ? height - 15 : height - 5}
          width="8"
          height="15"
          className={`${color} opacity-50`}
        />
      </g>
    );
  };

  return (
    <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
      <svg width="400" height="200" viewBox="0 0 400 200">
        {[...Array(20)].map((_, i) => generateCandlestick(i))}
      </svg>
    </div>
  );
};

export default CandlestickChart;