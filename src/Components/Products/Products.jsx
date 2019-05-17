import React from 'react';
import './products.scss';

const productItems = product => {
  return (
    <li key={product} className="product-container">
      <div className="product-img-container">
        <img
          src={`/assets/${product.toLowerCase()}_logo.png`}
          alt={`${product.toLowerCase()}_logo`}
        />
      </div>
      <div className="product-name">{product}</div>
    </li>
  );
};
function Products() {
  const products = ['Rilo', 'Convergely', 'RailsKits', 'Dashable'];
  return (
    <section className="products">
      <hr />
      <h3>Koombea Products</h3>
      <p>
        Our deep industry expertise and passion for building successful products led us to launching
        several products of our own.
      </p>
      <div className="products-container">
        <div className="left-section">
          <div className="left-section-img-container">
            <img src="/assets/sassler.png" alt="sassler app" />
          </div>
        </div>
        <div className="right-section">
          <div className="right-section-container">
            <h4>Sassler</h4>
            <h3>Make your product more powerful with intelligent integrations</h3>
            <a href="/">
              Learn more
              <img className="btn-arrow" src="/assets/right_arrow.png" alt="right_arrow" />
            </a>
          </div>
        </div>
      </div>
      <ul className="products-list">{products.map(product => productItems(product))}</ul>
    </section>
  );
}

export default Products;
