import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const TableOfContents = () => {
  const { t, language } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('personalityTitle') },
    { id: 'work', label: t('projectsTitle') },
    { id: 'skills', label: t('skillsTitle') },
    { id: 'projects', label: t('projectsTitle') }
  ];

  useEffect(() => {
    // Create Intersection Observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      // Get all intersecting entries and find the topmost one (closest to viewport top)
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Find the section that is topmost (smallest boundingClientRect.top)
        const topmostEntry = visibleEntries.reduce((topmost, current) => {
          return current.boundingClientRect.top < topmost.boundingClientRect.top ? current : topmost;
        });
        setActiveSection(topmostEntry.target.id);
      }
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="toc">
      <nav className="toc__nav">
        <ul className="toc__list">
          {sections.map((section) => (
            <li key={section.id} className="toc__item">
              <button
                className={`toc__link ${activeSection === section.id ? 'toc__link--active' : ''}`}
                onClick={() => handleScroll(section.id)}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                <span className="toc__text">{section.label}</span>
                <span className="toc__indicator"></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default TableOfContents;
