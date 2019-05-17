import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <section className="footer">
      <div className="project-idea">
        <h3>Have a project idea?</h3>
        <p>Tap into our in-depth industry expertise and get the solution you need.</p>
        <button type="button" className="btn btn-green">
          Let’s discuss your project
          <img className="btn-arrow" src="/assets/right_arrow_white.png" alt="right arrow white" />
        </button>
      </div>
      <div className="links">
        <div className="links-container">
          <span>Koombea</span>
          <ul>
            <li>Services</li>
            <li>Work</li>
            <li>About</li>
          </ul>
        </div>
        <div className="links-container">
          <span>Company </span>
          <ul>
            <li>Leadership Team</li>
            <li>Koombea Shop</li>
            <li>Koombea Products</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="links-container">
          <span>More Links</span>
          <ul>
            <li>FAQ</li>
            <li>Resources</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="links-container">
          <span>Products</span>
          <ul>
            <li>Rilo</li>
            <li>Convergely</li>
            <li>Sassler</li>
            <li>Dashable</li>
            <li>Railskits</li>
            <li>Pintala</li>
          </ul>
        </div>
        <div className="links-container">
          <span>Get in touch </span>
          <span className="contact-us">Contact us</span>
          <ul className="social-media">
            <li>
              <img src="assets/fb_icon.png" alt="fb icon" className="fb-icon" />
            </li>
            <li>
              <img src="assets/tw_icon.png" alt="tw icon" className="tw-icon" />
            </li>
            <li>
              <img src="assets/ss_icon.png" alt="ss icon" className="ss-icon" />
            </li>
            <li>
              <img src="assets/be_icon.png" alt="be icon" className="be-icon" />
            </li>
            <li>
              <img src="assets/ig_icon.png" alt="ig icon" className="ig-icon" />
            </li>
            <li>
              <img src="assets/in_icon.png" alt="in icon" className="in-icon" />
            </li>
          </ul>
        </div>
      </div>
      <div className="rights">
        <small>© 2007- 2017 Koombea, Inc. All Rights Reserved</small>
      </div>
    </section>
  );
}

export default Footer;
