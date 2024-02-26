import React from 'react'

import gallery1 from '../assets/images/shaggz1.webp'
import gallery2 from '../assets/images/shaggz2.webp'

const Gallery = () => {
  return (
    <section className="py-16 scroll-m-12" id="gallery">
        <div className="text-center text-primary text-2xl font-semibold">
            <h3>Shared Remembrances</h3>
        </div>
        <div className="p-8">
            <div className="columns-2 md:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-2 lg:[&>img:not(:first-child)]:mt-4 gap-3 lg:gap-4">
                <img src={gallery1} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="transition duration-200 transform hover:scale-105" />
                <img src="https://images.unsplash.com/photo-1702470170564-22dd352f5b88?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="unsplash" />
                <img src={gallery2} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="transition duration-200 transform hover:scale-105" />
                <img src="https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="unsplash4" />
                <img src="https://images.unsplash.com/photo-1702651598372-f8e777dabe6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="unsplash3" />
                <img src="https://images.unsplash.com/photo-1702279314936-524daf4f73cf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="unsplash2" />
                <img src="https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="unsplash3" />
            </div>
        </div>
    </section>
  )
}

export default Gallery