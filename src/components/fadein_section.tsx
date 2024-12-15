"use client"
import React, { useState, useEffect } from 'react';

export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    // @ts-expect-error: 
    observer.observe(domRef.current);
    // @ts-expect-error: 
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    // @ts-expect-error: 
    <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {props.children}
    </div>
  )
}