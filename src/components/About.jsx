import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <h1 className="section__title">About AP Plumbing</h1>
          <p className="section__para">Hi, I'm Angel Perez, the owner and operator of AP Plumbing. 
            I've been passionate about plumbing since I was 18 years old, 
            and have spent years mastering my craft to provide the best 
            service possible to my customers.
          </p>
           <p className="section__para">
            At AP Plumbing, I believe in honest, reliable, and affordable 
            service. Whether it's a small leak or a major repair, I treat 
            every job with the same dedication and attention to detail.
          </p>
          <p className="section__para">
            From drain cleaning to gas repairs, I offer a wide range of 
            plumbing services to keep your home running smoothly.
          </p>
          <a href="#services" className="btn">View our Services</a>
        </div>
      </div>
    </section>
  )
}

export default About