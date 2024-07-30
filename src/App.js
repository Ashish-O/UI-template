import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import './App.css';
import ScrollArrow from './ScrollArrow';
import Ice from "./Ice"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero />
      <Services />
      <ScrollArrow /> */}
      <Ice />
    </div>
  );
}

export default App;
