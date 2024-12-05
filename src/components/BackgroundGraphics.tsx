import React from 'react';
import CandlestickChart from './background/CandlestickChart';
import TradingLines from './background/TradingLines';
import DataPoints from './background/DataPoints';
import GridPattern from './background/GridPattern';

const BackgroundGraphics = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <GridPattern />
      <CandlestickChart />
      <TradingLines />
      <DataPoints />
      
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent dark:from-gray-900/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/50" />
    </div>
  );
};

export default BackgroundGraphics;