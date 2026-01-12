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

  const galleryImages = [
    { image: 'IMG_6675.JPEG', title: 'Featured Shot' },
    { image: 'IMG_8257.jpg', title: 'Portrait' },
    { image: 'IMG_4841.JPEG', title: 'Landscape' },
    { image: 'IMG_7861.jpg', title: 'Urban Life' },
    { image: 'IMG_6979.JPEG', title: 'Nature' },
    { image: 'IMG_7822.jpg', title: 'Street Photography' },
    { image: 'IMG_7855.jpg', title: 'Architecture' },
    { image: 'IMG_9323.JPG', title: 'Candid' }
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
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[0].image}`} className="img-fluid" alt={galleryImages[0].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[0].image}`} 
                    title={galleryImages[0].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[1].image}`} className="img-fluid" alt={galleryImages[1].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[1].image}`} 
                    title={galleryImages[1].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[2].image}`} className="img-fluid" alt={galleryImages[2].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[2].image}`} 
                    title={galleryImages[2].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[3].image}`} className="img-fluid" alt={galleryImages[3].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[3].image}`} 
                    title={galleryImages[3].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[4].image}`} className="img-fluid" alt={galleryImages[4].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[4].image}`} 
                    title={galleryImages[4].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[5].image}`} className="img-fluid" alt={galleryImages[5].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[5].image}`} 
                    title={galleryImages[5].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[6].image}`} className="img-fluid" alt={galleryImages[6].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[6].image}`} 
                    title={galleryImages[6].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <img src={`/assets/img/gallery/${galleryImages[7].image}`} className="img-fluid" alt={galleryImages[7].title} />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a 
                    href={`/assets/img/gallery/${galleryImages[7].image}`} 
                    title={galleryImages[7].title} 
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-arrows-angle-expand"></i>
                  </a>
                  <Link to="/gallery" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
