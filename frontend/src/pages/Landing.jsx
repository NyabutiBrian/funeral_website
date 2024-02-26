import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Hero from '../layouts/Hero'
import Content from '../layouts/Content'

const Landing = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Content />
        <Footer />
    </>
  )
}

export default Landing