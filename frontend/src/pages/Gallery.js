import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';

const Gallery = () => {
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
    'gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg',
    'gallery-5.jpg', 'gallery-6.jpg', 'gallery-7.jpg', 'gallery-8-2.jpg',
    'gallery-9.jpg', 'gallery-10.jpg', 'gallery-11.jpg', 'gallery-12.jpg',
    'gallery-13.jpg', 'gallery-14.jpg'
  ];

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Gallery</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas 
                  consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. 
                  Quasi ratione sint. Sit quaerat ipsum dolorem.
                </p>
                <Link to="/contact" className="cta-btn">Available for Hire</Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Gallery</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="gallery section">
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            {galleryImages.map((image, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={`/assets/img/gallery/${image}`} className="img-fluid" alt={`Gallery ${index + 1}`} />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a 
                      href={`/assets/img/gallery/${image}`} 
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
