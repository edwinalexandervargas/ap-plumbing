import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { services } from '../data'

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <h1 className="section__title">Our Services</h1>
          <div className="services__container">
            {services.map((service) => (
              <div className="service" key={service.title}>
                <FontAwesomeIcon icon={service.icon} className="service__icon" />
                <h3 className="service__title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services