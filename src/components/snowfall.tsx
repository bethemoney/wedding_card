"use client";

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Snowfall from 'react-snowfall';

export default function SnowFall() {
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [pieces, setPieces] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: document.body.scrollHeight });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setPieces((prev) => prev + 6);
    if (isClient) {
      const interval = setInterval(() => {
        setPieces((prev) => prev + 3);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-full pointer-events-none">
      <Snowfall
       snowflakeCount={100}
       color="white"
       speed={[0.5, 1.0]}
       wind={[-0.5,0.5]}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
}