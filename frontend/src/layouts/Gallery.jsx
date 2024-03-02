import React, { useEffect } from 'react';

import gallery1 from '../assets/images/gallery1.webp';
import gallery2 from '../assets/images/gallery2.webp';
import gallery3 from '../assets/images/gallery3.webp';
import gallery4 from '../assets/images/gallery4.webp';
import gallery5 from '../assets/images/gallery5.webp';
import gallery6 from '../assets/images/gallery6.webp';
import gallery7 from '../assets/images/gallery7.webp';
import gallery8 from '../assets/images/gallery8.webp';
import gallery9 from '../assets/images/gallery9.webp';
import gallery10 from '../assets/images/gallery10.webp';
import gallery11 from '../assets/images/gallery11.webp';
import gallery12 from '../assets/images/gallery12.webp';
import gallery13 from '../assets/images/gallery13.webp';
import gallery14 from '../assets/images/gallery14.webp';
import gallery15 from '../assets/images/gallery15.webp';
import gallery16 from '../assets/images/gallery16.webp';
import gallery17 from '../assets/images/gallery17.webp';
import gallery18 from '../assets/images/gallery18.webp';
import gallery19 from '../assets/images/gallery19.webp';
import gallery20 from '../assets/images/gallery20.webp';
import gallery21 from '../assets/images/gallery21.webp';
import gallery22 from '../assets/images/gallery22.webp';
import gallery23 from '../assets/images/gallery23.webp';
import gallery24 from '../assets/images/gallery24.webp';
import gallery25 from '../assets/images/gallery25.webp';
import gallery26 from '../assets/images/gallery26.webp';
import gallery27 from '../assets/images/gallery27.webp';

const Gallery = () => {

  useEffect(() => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');

    const openLightbox = (image) => {
      const lightboxImage = document.getElementById('lightbox-image');
      lightboxImage.src = image.src;
      lightboxOverlay.style.display = 'flex';
    };

    const closeLightbox = () => {
      lightboxOverlay.style.display = 'none';
    };

    // Add click event listeners to each gallery image
    galleryImages.forEach((image) => {
      image.addEventListener('click', () => openLightbox(image));
    });

    // Add click event listener to close the lightbox overlay
    lightboxOverlay.addEventListener('click', closeLightbox);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      galleryImages.forEach((image) => {
        image.removeEventListener('click', openLightbox);
      });
      lightboxOverlay.removeEventListener('click', closeLightbox);
    };
  }, [])

  useEffect(() => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');

    const openLightbox = (image) => {
      const lightboxImage = document.getElementById('lightbox-image');
      lightboxImage.src = image.src;
      lightboxOverlay.style.display = 'flex';
    };

    const closeLightbox = () => {
      lightboxOverlay.style.display = 'none';
    };

    // Add click event listeners to each gallery image
    galleryImages.forEach((image) => {
      image.addEventListener('click', () => openLightbox(image));
    });

    // Add click event listener to close the lightbox overlay
    lightboxOverlay.addEventListener('click', closeLightbox);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      galleryImages.forEach((image) => {
        image.removeEventListener('click', openLightbox);
      });
      lightboxOverlay.removeEventListener('click', closeLightbox);
    };
  }, [])

  const handleWhatsAppClick = () => {
    // Replace `1234567890` with your actual WhatsApp number
    const whatsappUrl = 'https://wa.me/254700013897';

    // Open the share dialog
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 scroll-m-12" id="gallery">
      <div className="text-center text-primary text-2xl font-semibold">
        <h3>Shared Remembrances</h3>
      </div>

      <div className="p-8">
        <div className="columns-2 md:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-2 lg:[&>img:not(:first-child)]:mt-4 gap-3 lg:gap-4">
          <img src={gallery1} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery2} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery3} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery4} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery5} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery6} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery7} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery8} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery9} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery10} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery11} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery12} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery13} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery14} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery15} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery16} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery17} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery18} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery19} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery20} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery21} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery22} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery23} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery24} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery25} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery26} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
          <img src={gallery27} alt="Yunuke Bosibori Nyambane" title="Yunuke Bosibori Nyambane" loading="lazy" className="gallery-image transition duration-200 transform hover:scale-105" />
        </div>
      </div>

      <div className="hidden lightbox-overlay fixed top-0 left-0 right-0 w-[100%] h-[100%] content-center items-center bg-[#000000cc]" id="lightbox-overlay">
        <img src='' alt="Lightbox Image" className="lightbox-image max-w-[90%] max-h-[60%] mx-auto rounded-3xl" id="lightbox-image"/>
      </div>
      
      <div className='text-center text-primary text-xs font-semibold italic'>
        <p>Do you have any image and would like to share as well ?</p>
        <div className="text-white py-2">
            <button onClick={handleWhatsAppClick} className="bg-primary italic focus:outline-none focus:ring focus:ring-cyan-300 py-3 px-6 rounded-3xl transition duration-200 transform hover:scale-110">Share Image via WhatsApp</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
