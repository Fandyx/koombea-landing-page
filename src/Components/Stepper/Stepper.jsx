import React, { useEffect } from 'react';
import './stepper.scss';

const sections = ['hero', 'services', 'results', 'products', 'contact'];
const isElementActive = element => {
  const elementTarget = document.getElementsByClassName(element)[0];
  if (!elementTarget) return '';
  return window.scrollY > elementTarget.offsetTop - 50;
};
const checkForSections = () => {
  sections.forEach(section => {
    const elementClassList = document.querySelector(`.${section}-stepper-container`).classList;
    if (isElementActive(section)) {
      elementClassList.add('active');
    } else {
      elementClassList.remove('active');
    }
  });
};

function Services() {
  useEffect(() => {
    checkForSections(sections);
    window.addEventListener('scroll', () => checkForSections(sections));
  }, []);
  return (
    <ul className="stepper">
      {sections.map(section => (
        <li
          key={section}
          className={`${section}-stepper-container ${isElementActive(section) ? 'active' : ''}`}
        >
          <button
            className="stepper-section"
            onClick={() => {
              const elem = document.getElementsByClassName(section)[0];
              elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            type="button"
          />
        </li>
      ))}
    </ul>
  );
}

export default Services;
