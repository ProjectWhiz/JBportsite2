import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { icon: 'bi-activity', title: 'Lorem Ipsum', description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi' },
    { icon: 'bi-bounding-box-circles', title: 'Sed ut perspici', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' },
    { icon: 'bi-calendar4-week', title: 'Magni Dolores', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia' },
    { icon: 'bi-broadcast', title: 'Nemo Enim', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' },
    { icon: 'bi-easel', title: 'Dele Cardo', description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur' },
    { icon: 'bi-gem', title: 'Divera Don', description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur' },
    { icon: 'bi-geo-alt', title: 'Rati City', description: 'Est et aut neque dolorem voluptatem quis molestias veritatis labore cupiditate' },
    { icon: 'bi-inboxes', title: 'Ludac Parton', description: 'Cum voluptatum qui rerum molestias aperiam est minus. Et eum perspiciatis' }
  ];

  const pricingPlans = [
    {
      name: 'Free Plan',
      price: '0',
      period: 'month',
      features: ['Quam adipiscing vitae proin', 'Nec feugiat nisl pretium', 'Nulla at volutpat diam uteera', 'Pharetra massa massa ultricies', 'Massa ultricies mi quis hendrerit'],
      strikethrough: [false, false, false, true, true]
    },
    {
      name: 'Business Plan',
      price: '29',
      period: 'month',
      featured: true,
      features: ['Quam adipiscing vitae proin', 'Nec feugiat nisl pretium', 'Nulla at volutpat diam uteera', 'Pharetra massa massa ultricies', 'Massa ultricies mi quis hendrerit'],
      strikethrough: [false, false, false, false, true]
    },
    {
      name: 'Developer Plan',
      price: '49',
      period: 'month',
      features: ['Quam adipiscing vitae proin', 'Nec feugiat nisl pretium', 'Nulla at volutpat diam uteera', 'Pharetra massa massa ultricies', 'Massa ultricies mi quis hendrerit'],
      strikethrough: [false, false, false, false, false]
    }
  ];

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Services</h1>
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
              <li className="current">Services</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="row gy-4">
            {services.map((service, index) => (
              <div key={index} className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                <div className="service-item position-relative">
                  <div className="icon"><i className={`bi ${service.icon} icon`}></i></div>
                  <h4><button className="stretched-link" style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer', font: 'inherit'}}>{service.title}</button></h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>Check my adorable pricing</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-4" data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
                <div className={`pricing-item ${plan.featured ? 'featured' : ''}`}>
                  <h3>{plan.name}</h3>
                  <h4><sup>$</sup>{plan.price}<span> / {plan.period}</span></h4>
                  <ul>
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className={plan.strikethrough[fIndex] ? 'na' : ''}>
                        <i className={`bi ${plan.strikethrough[fIndex] ? 'bi-x' : 'bi-check'}`}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="buy-btn" style={{border: 'none', cursor: 'pointer'}}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
