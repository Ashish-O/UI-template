import React from 'react';
import './Hero.css';

function Hero() {

  const handleScroll = () =>{
    console.log('Hi hero');
  }
  const handleClick = () =>{
    console.log('Hi click');
  }

  return (
    <section className="hero" onScroll={handleScroll}>
      <div className="hero-content">
        <h1>We're Building Your Future</h1>
        <p>The only limit is what you can dream of. Innovate with us, build.</p>
        <button onClick={handleClick}>GET STARTED</button>
      </div>
    </section>
  );
}

export default Hero;
