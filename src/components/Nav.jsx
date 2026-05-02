import React from 'react'
import APLogo from '../assets/AP-Logo-removebg-preview.png'

const Nav = () => {
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
        </div>
    </nav>
  )
}

export default Nav