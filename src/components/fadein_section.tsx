"use client"
import React, { useState, useEffect } from 'react';
/* eslint-disable  no-explicit-any */
export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    // @ts-ignore: 
    observer.observe(domRef.current);
    // @ts-ignore: 
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    // @ts-ignore: 
    <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {props.children}
    </div>
  )
}