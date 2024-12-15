"use client"
import React, { useState, useEffect } from 'react';
// @ts-expect-error: type no define
export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    // @ts-expect-error: type no define
    observer.observe(domRef.current);
    // @ts-expect-error: type no define
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    // @ts-expect-error: type no define
    <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {props.children}
    </div>
  )
}