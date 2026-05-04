import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Contact />
    </>
  )
}

export default Home