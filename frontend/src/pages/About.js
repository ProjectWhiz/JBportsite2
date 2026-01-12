import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>About</h1>
                <p className="mb-0">
                  Where light, perspective, and emotion come together to capture what words can’t.
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
              <li className="current">About</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/img/gallery/IMG_8257.jpg" className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-5 content">
              <h2>Professional Photographer from New York</h2>
              <p className="fst-italic py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 September 2000</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>coming soon</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>470-640-7094</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>San Francisco, CA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Experience:</strong> <span>10yrs</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                I’m Jaden Berry, a photographer and cinematographer focused on capturing real moments with intention and emotion. My work blends clean composition, natural light, and thoughtful framing to create visuals that feel both cinematic and authentic.
                Whether I’m shooting portraits, lifestyle content, or creative visuals, my goal is always the same: to tell a story that feels honest and timeless. I believe the best images don’t just look good — they make you feel something.
                Based in New York and available for freelance work, I collaborate with individuals, brands, and creatives who value detail, perspective, and strong visual identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What they are saying about me</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={`/assets/img/testimonials/testimonials-${num}.jpg`} className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Happy Client</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Great attention to detail and a true professional. Jaden captured our wedding perfectly, 
                        delivering stunning photos that we will cherish forever. Highly recommended!
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
