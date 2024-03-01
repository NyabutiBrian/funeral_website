import React from 'react'

import funeral1 from '../assets/images/funeral-01.webp'

const Hero = () => {
  return (
    <section>
        <div className="mt-8 grid lg:grid-cols-5 gap-8 text-white font-semibold">
            <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-2">
                <div>
                    <h6 className="text-sm md:text-base">HONORING THE LIFE OF</h6>
                    <h1 className="text-4xl lg:text-5xl">YUNUKE</h1>
                    <h1 className="text-4xl lg:text-5xl">BOSIBORI</h1>
                    <h1 className="text-4xl lg:text-5xl">NYAMBANE</h1>
                </div>
            </div>

            <div className="lg:col-span-3">
                <div className="flex flex-row justify-end">
                    <img src={funeral1} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" className="w-[70rem] sm:w-[40rem] lg:w-[70rem]"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero