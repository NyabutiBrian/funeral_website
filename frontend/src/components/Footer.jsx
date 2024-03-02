import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-2 pt-8 pb-5">

            <div className="flex flex-row w-full items-center my-6 lg:my-8">
                <div className="bg-white h-0.5 w-full"></div>
            </div>
            
            <div className="flex flex-col  items-center lg:flex-row justify-center text-xs sm:text-sm text-white font-medium italic text-center">
                <span>May you find eternal peace and rest in the embrace of eternity.</span>
                {/* <p>Developed by <a href="https://momanyi-brian-portfolio.vercel.app">Momanyi Brian</a></p> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer