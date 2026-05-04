import React from "react";
import Angel from "../assets/Angel.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <img src={Angel} className="angel__img" alt="" />
          <div className="hero__text">
            <h1 className="hero__title">Fast & Reliable Plumbing Services</h1>
            <p className="hero__sub">
              Servicing Los Angeles & San Gabriel Valley
            </p>
            <a href="#contact" className="btn hero__btn">
              Get a Free Quote
            </a>
          <div className="hero__badges">
            <span>✓ Licensed & Insured</span>
            <span>✓ 24/7 Emergency Service</span>
            <span>✓ Free Estimates</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
