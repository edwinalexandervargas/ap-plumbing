import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { services } from '../data'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <h1 className="section__title">Our Services</h1>
          <div className="services__container">
            {services && services.map((service) => (
              <div className="service" key={service.title} onClick={() => setSelectedService(service)}>
                <FontAwesomeIcon icon={service.icon} className="service__icon" />
                <h3 className="service__title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <div className="modal__overlay" onClick={() => setSelectedService(null)}>
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setSelectedService(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <FontAwesomeIcon icon={selectedService.icon} className="modal__icon" />
            <h2 className="modal__title">{selectedService.title}</h2>
            <p className="modal__description">{selectedService.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services