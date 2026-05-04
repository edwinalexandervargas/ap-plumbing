import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="hero__text">
            <h1 className="hero__title">Fast & Reliable Plumbing Services</h1>
            <p className="hero__sub">Servicing Los Angeles & San Gabriel Valley</p>
            <a href="#contact" className="btn hero__btn">Get a Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero