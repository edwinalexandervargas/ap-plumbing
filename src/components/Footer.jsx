import React from 'react'
import APLogo from '../assets/AP-Logo-removebg-preview.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <img src={APLogo} className="footer__logo" alt="AP Plumbing" />
        <ul className="footer__links">
          <li className="footer__link">
            <a href="#about">About</a>
          </li>
          <li className="footer__link">
            <a href="#services">Services</a>
          </li>
          <li className="footer__link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="footer__copyright">&copy; AP Plumbing 2026. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer