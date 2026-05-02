import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <h2 className="section__title">Get in touch</h2>
          <div className="contact__container">
            <div className="contact__info">
              <h3 className="contact__info--title">AP Plumbing</h3>
              <p className="contact__info--item">
                <FontAwesomeIcon icon="phone" /> (323) 329 7204
              </p>
              <p className="contact__info--item">
                <FontAwesomeIcon icon="envelope" /> AP-Plumbing@gmail.com
              </p>
              <p className="contact__info--item">
                <FontAwesomeIcon icon="id-card" /> Lic # 1097944
              </p>
              <a href="tel:3233297204" className="btn">Call now</a>
            </div>
            <div className="contact__form">
              <input type="text" placeholder="Your Name" className="contact__input" />
              <input type="tel" placeholder="Your Phone" className="contact__input" />
              <textarea placeholder="Message" className="contact__textarea"></textarea>
              <button className="btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact