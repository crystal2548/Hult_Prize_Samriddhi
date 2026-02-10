import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ end, duration = 2.5, prefix = "", suffix = "", separator = ",", decimals = 0 }) => {
  return (
    <CountUp 
      start={0} 
      end={end} 
      duration={duration} 
      separator={separator} 
      decimals={decimals}
      prefix={prefix} 
      suffix={suffix} 
      enableScrollSpy 
      scrollSpyOnce
    />
  );
};

export default AnimatedCounter;
