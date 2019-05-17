import React, { useEffect } from 'react';
import './results.scss';

function Results() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const background = document.querySelector('.results');
      background.style.backgroundPosition = `0 ${48 + scrolled * 0.5}%`;
    });
  }, []);
  return (
    <section className="results">
      <div className="info-container">
        <div className="left-side">
          <hr />
          <h3>Results for Innovative Companies</h3>
        </div>
        <div className="right-side">
          <div>
            <div className="top-container">
              <img src="assets/mock_phone.png" alt="mocked phone" />
            </div>
            <div className="bottom-container">
              <h3>Samsung</h3>
              <hr />
              <p>
                Wellmatch needed a skilled agile development partner to turn their MVP into a mature
                product that combined dozens of disparate data sources into a simple, engaging user
                experience.
              </p>
              <a href="/">
                Learn how we helped Samsung
                <img className="btn-arrow" src="/assets/right_arrow.png" alt="right_arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img className="chevron-down" src="/assets/chevron_down_white.png" alt="chevron_down" />
      <div className="as-seen-on">
        <h4>As seen on:</h4>
        <ul>
          <li className="forbes-logo-container">
            <img className="brand-logo" src="/assets/forbes_logo.png" alt="forbes_logo" />
          </li>
          <li className="nyt-logo-container">
            <img className="brand-logo" src="/assets/nyt_logo.png" alt="nyt_logo" />
          </li>
          <li className="bi-logo-container">
            <img className="brand-logo" src="/assets/bi_logo.png" alt="bi_logo" />
          </li>
          <li className="ss-logo-container">
            <img className="brand-logo" src="/assets/ss_logo.png" alt="ss_logo" />
          </li>
          <li className="women-logo-container">
            <img className="brand-logo" src="/assets/women_logo.png" alt="women_logo" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Results;
