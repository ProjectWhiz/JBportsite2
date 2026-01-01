import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';

const Home = () => {
  useEffect(() => {
    // Initialize GLightbox for gallery images
    const lightbox = GLightbox({
      selector: '.glightbox'
    });

    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  const galleryLayout = [
    { image: 'IMG_4841.JPEG', size: 'small', position: 'top-left' },
    { image: 'IMG_7861.jpg', size: 'small', position: 'bottom-left' },
    { image: 'IMG_6675.JPEG', size: 'large', position: 'center' },
    { image: 'IMG_6979.JPEG', size: 'small', position: 'top-right' },
    { image: 'IMG_7822.JPG', size: 'small', position: 'bottom-right' }
  ];

  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="100">
              <h2>
                <span>I'm </span>
                <span className="underlight">Jaden Berry</span>
                <span> a Professional Photographer from New York </span>
              </h2>
              <p>Where light, perspective, and emotion come together to capture what words can’t.</p>
              <Link to="/contact" className="btn-get-started">Available for Hire</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="gallery-masonry">
            {galleryLayout.map((item, index) => (
              <div key={index} className={`gallery-item gallery-item-${item.size} gallery-item-${item.position}`}>
                <img src={`/assets/img/gallery/${item.image}`} className="img-fluid" alt={`Gallery ${index + 1}`} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${item.image}`} 
                    title={`Gallery ${index + 1}`} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
