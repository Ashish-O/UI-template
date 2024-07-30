import React from 'react';
import './Services.css';

const Services =() => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-columns">
        <div className="service">
          <h3>ICE-CONTROLS</h3>
          <p>One stop for service owners to achieve and cpmply withs ICE control goals.</p>
        </div>
        <div className="service">
          <h3>TRMF</h3>
          <p>Reviewing TRMF question, one step ahead to more resilient services.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

