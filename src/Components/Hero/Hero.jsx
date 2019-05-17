import React, { useEffect } from 'react';
import './hero.scss';

function Hero() {
  const brands = ['motorola', 'samsung', 'aetna', 'aspyr', 'virtualPBX'];
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const background = document.querySelector('.parallax-banner');
      background.style.backgroundPosition = `762px ${30 + scrolled * 0.8}%`;
    });
  }, []);
  return (
    <section className="hero">
      <div className="parallax-banner" />
      <div className="info-content">
        <hr />
        <h3>Digital Product Development for Innovative Companies</h3>
        <p>
          Need to ship a digital product or mobile app?
          <br />
          Our Expertise can help you ship on time and on budget
        </p>
        <button type="button" className="btn btn-green">
          Let’s discuss your project
          <img className="btn-arrow" src="/assets/right_arrow_white.png" alt="right_arrow" />
        </button>
      </div>

      <div className="scroll-icon-container">
        <img src="/assets/scroll_icon.png" alt="scroll icon" />
      </div>
      <div className="client-list-container">
        <ul>
          {brands.map(brand => (
            <li key={brand} className={`${brand}-container`}>
              <img className={brand} src={`/assets/${brand}_logo.png`} alt={`${brand}_logo`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
