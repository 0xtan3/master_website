
'use client';

import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './home/page';
import AboutUs from './about/page';
import ContactSection from './contact/page';

const App: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Home />
        <AboutUs />
        <ContactSection />
      </div>
    </>
  );
};

export default App;
