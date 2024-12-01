"use client";

import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';



export default function SnowFall() {
  const [isClient, setIsClient] = useState(false);
  const [, setDimensions] = useState({ width: 0, height: 0 });
  const [, setPieces] = useState(0);

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
  const snowflake = document.createElement('img')
  snowflake.src = `/wedding_card/image/snow_white.png`
  
  const images = [snowflake]
  return (
    <div className="w-full h-full pointer-events-none">
      <Snowfall
       snowflakeCount={25}
       color="white"
       speed={[0.5, 2.5]}
       wind={[-0.5, 2.0]}
       images={images}
       radius={[10,15]}
        style={{
          position: 'absolute',
          zIndex: 999,
        }}
      />
    </div>
  );
}