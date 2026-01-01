import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, error: false, sent: false });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: false, sent: false });

    try {
      // You can integrate with your Flask backend here
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({ loading: false, error: false, sent: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ loading: false, error: true, sent: false });
    }
  };

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Contact</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas 
                  consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. 
                  Quasi ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Contact</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          
          <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-5">
              
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Location</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="300">
            <div className="row gy-4">

              <div className="col-md-6">
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="col-md-6">
                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="col-md-12">
                <input 
                  type="text" 
                  className="form-control" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="col-md-12">
                <textarea 
                  className="form-control" 
                  name="message" 
                  rows="6" 
                  placeholder="Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="col-md-12 text-center">
                {status.loading && <div className="loading">Loading</div>}
                {status.error && <div className="error-message">Error sending message. Please try again.</div>}
                {status.sent && <div className="sent-message">Your message has been sent. Thank you!</div>}

                <button type="submit" disabled={status.loading}>Send Message</button>
              </div>

            </div>
          </form>

        </div>
      </section>
    </main>
  );
};

export default Contact;
