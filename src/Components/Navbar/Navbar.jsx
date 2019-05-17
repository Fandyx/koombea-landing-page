import React, { useEffect, useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [backgroundClass, setBackgroundClass] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setBackgroundClass('dark');
      } else {
        setBackgroundClass('');
      }
    });
  }, []);

  const items = ['Services', 'Work', 'Resources', 'About', 'Contact'];
  return (
    <React.Fragment>
      <nav className={`${backgroundClass} navbar desktop`}>
        <img src="/assets/koombea_logo.png" alt="logo" className="navbar-logo" />
        <ul className="navbar-items">
          {items.map(item => (
            <li key={item} className="navbar-item">
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <nav className={`${backgroundClass} navbar mobile`}>
        <img src="/assets/koombea_logo.png" alt="logo" className="navbar-logo" />
        <button
          className={`${isMenuOpen ? 'menu-open' : ''} hamburger__toggle`}
          type="button"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </button>
        {isMenuOpen && (
          <div className="mobile-list-container">
            <ul className="navbar-items">
              {items.map(item => (
                <li key={item} className="navbar-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
