import React, { useState } from 'react'
import APLogo from '../assets/AP-Logo-removebg-preview.png'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      setUser(result.user)
      setShowLogin(false)
    } catch (error) {
      alert('Invalid email or password')
    }
  }

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

        {/* subtle admin link */}
        <div className="admin__link--wrapper">
          {!user ? (
            <span className="admin__link" onClick={() => setShowLogin(true)}>Admin</span>
          ) : (
            <span className="admin__link" onClick={() => { signOut(auth); setUser(null) }}>Logout</span>
          )}
        </div>

        {/* login modal */}
        {showLogin && (
          <div className="admin__overlay" onClick={() => setShowLogin(false)}>
            <div className="admin__modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="admin__title">Admin Login</h3>
              <input
                type="email"
                placeholder="Email"
                className="admin__input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="admin__input"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="admin__btn" onClick={login}>Login</button>
              <button className="admin__cancel" onClick={() => setShowLogin(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer