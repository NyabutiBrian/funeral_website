import React, { useEffect, useState } from 'react';

import gallery1 from '../assets/images/gallery1.webp';
import gallery2 from '../assets/images/gallery2.webp';
import gallery3 from '../assets/images/gallery3.webp';
import gallery4 from '../assets/images/gallery4.webp';
import gallery5 from '../assets/images/gallery5.webp';
import gallery6 from '../assets/images/gallery6.webp';
import gallery7 from '../assets/images/gallery7.webp';

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
        </div>
      </div>

      <div className="hidden lightbox-overlay fixed top-0 left-0 right-0 w-[100%] h-[100%] content-center items-center bg-[#000000cc]" id="lightbox-overlay">
        <img src='' alt="Lightbox Image" className="lightbox-image max-w-[90%] max-h-[60%] mx-auto rounded-3xl" id="lightbox-image"/>
      </div>
    </section>
  );
};

export default Gallery;
