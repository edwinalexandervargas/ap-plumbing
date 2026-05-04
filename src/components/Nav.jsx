import React, { useState } from 'react'
import APLogo from '../assets/AP-Logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
        <div className="nav__container">
            <img src={APLogo} className="nav__logo" alt="" />
            <ul className="nav__links">
                <li className="nav__link">
                    <a href="#about">About</a>
                </li>
                <li className="nav__link">
                    <a href="#services">Services</a>
                </li>
                <li className="nav__link">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <button className="btn__hamburger" onClick={() => setMenuOpen(true)}>
                <FontAwesomeIcon icon={faBars} className="nav__bar"/>
            </button>
        </div>

        <div className={`menu__sidebar ${menuOpen ? 'menu--open' : ''}`}>
            {menuOpen &&(
            <button className="menu__close" onClick={() => setMenuOpen(false)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            )}
            <ul className="menu__links">
                <li className="menu__link"><a href="#about" onClick={() =>setMenuOpen(false)}>About</a></li>
                <li className="menu__link"><a href="#services" onClick={() =>setMenuOpen(false)}>Services</a></li>
                <li className="menu__link"><a href="#contact" onClick={() =>setMenuOpen(false)}>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav