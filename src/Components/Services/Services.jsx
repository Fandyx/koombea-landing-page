import React from 'react';
import './services.scss';

function Services() {
  return (
    <section className="services">
      <hr />
      <h3>We manage projects with agile methodology</h3>
      <ul className="service-list">
        <li className="ux-ui-container">
          <img src="/assets/UX_UI_icon.png" alt="UI/UX" className="service-icon ux-ui-icon" />
          <span className="service-description">UX/UI Designers</span>
        </li>
        <li className="ror-container">
          <img src="/assets/ror_icon.png" alt="UI/UX" className="service-icon ror-icon" />
          <span className="service-description">Ruby on Rails Developers</span>
        </li>
        <li className="mobile-container">
          <img src="/assets/mobile_icon.png" alt="UI/UX" className="service-icon mobile-icon" />
          <span className="service-description"> Mobile Engineers</span>
        </li>
        <li className="product-container">
          <img src="/assets/product_icon.png" alt="UI/UX" className="service-icon product-icon" />
          <span className="service-description"> Product Specialists</span>
        </li>
      </ul>
      <div className="text-container">
        <div className="left-side">
          <p>
            We address the biggest risks your next software development project will face. Our
            custom agile process keeps your project on budget. We code to very high standards and
            test continuously, which creates easy to maintain, high quality software.
          </p>
        </div>
        <div className="right-side">
          <p>
            Our incremental development approach allows you to hit even aggressive timelines. Our
            deeply skilled UX/UI designers, Ruby on Rails developers, mobile engineers and Product
            Managers have a track record of delivering on strategically important initiatives.
          </p>
        </div>
      </div>
      <button type="button" className="btn btn-white">
        Let’s discuss your project
        <img className="btn-arrow" src="/assets/right_arrow.png" alt="right_arrow" />
      </button>
      <img className="chevron-down" src="/assets/chevron_down.png" alt="chevron down" />
    </section>
  );
}

export default Services;
