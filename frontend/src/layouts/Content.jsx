import React from 'react'

import waveTop from '../assets/images/dark-wave-haikei-up.svg'
import waveDown from '../assets/images/dark-wave-haikei-down.svg'

import Contact from '../components/Contact'

import About from './About'
import Gallery from './Gallery'
import Messages from './Messages'

const Content = () => {
  return (
    <>
        {/* Content */}
        <div className="-mt-10 sm:-mt-16 xl:-mt-20 relative z-30">
            {/* SVG TOP */}
            <div>
                <img src={waveTop} alt="Wave svg" title="Wave SVG" />
            </div>

            {/* MAIN CONTENT */}
            <main className="bg-white overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4">

                    {/* ABOUT */}
                    <About />

                    {/* GALLERY */}
                    <Gallery />

                    {/* Condolence Messages */}
                    <Messages />

                    {/* CONTACT */}
                    < Contact />
                </div>
            </main>

            {/* SVG BOTTOM */}
            <div>
                <img src={waveDown} alt="Wave svg" title="Wave SVG" />
            </div>
        </div>
    </>
  )
}

export default Content