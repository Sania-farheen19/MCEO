"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import servicesData from "../data/services.json"

const ServicesPage = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setServices(servicesData)
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / <span>Services</span>
          </div>
        </div>
      </section>

      <section className="services-intro section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Digital Marketing <span className="text-primary">Solutions</span>
            </h2>
            <p className="section-subtitle">
              We offer a comprehensive range of digital marketing services to help your business grow online. Our
              data-driven approach ensures that you get measurable results and a strong return on investment.
            </p>
          </div>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon">
                  <img src={service.icon || "/placeholder.svg"} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <Link to={`/services/${service.slug}`} className="btn btn-outline">
                  Learn More
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="section-subtitle">How we deliver results for your business</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Discovery & Analysis</h3>
                <p className="step-description">
                  We start by understanding your business, goals, target audience, and current digital presence. Our
                  team conducts a thorough analysis to identify opportunities and challenges.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Strategy Development</h3>
                <p className="step-description">
                  Based on our findings, we create a customized digital marketing strategy tailored to your specific
                  needs and objectives. We define key performance indicators (KPIs) to measure success.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Implementation</h3>
                <p className="step-description">
                  Our team of experts executes the strategy across various digital channels. We ensure all elements work
                  together cohesively to achieve your goals.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Monitoring & Optimization</h3>
                <p className="step-description">
                  We continuously monitor campaign performance and make data-driven adjustments to optimize results.
                  Regular reporting keeps you informed about progress and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="section-subtitle">Common questions about our services</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How long does it take to see results?</h3>
              <p className="faq-answer">
                The timeline for results varies depending on the service and your specific situation. Some services like
                PPC can show immediate results, while SEO typically takes 3-6 months to see significant improvements.
                We'll provide realistic timelines during our initial consultation.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How much do your services cost?</h3>
              <p className="faq-answer">
                Our pricing is customized based on your specific needs, goals, and the scope of work required. We offer
                flexible packages to accommodate different budgets. Contact us for a free quote tailored to your
                business.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you offer contracts?</h3>
              <p className="faq-answer">
                Yes, we typically work with 6 or 12-month contracts to ensure we have enough time to implement
                strategies and deliver results. However, we also offer month-to-month options for certain services.
                We're flexible and can discuss what works best for your business.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How do you measure success?</h3>
              <p className="faq-answer">
                We establish clear KPIs at the beginning of our partnership based on your business goals. These might
                include website traffic, conversion rates, lead generation, revenue growth, or other relevant metrics.
                We provide regular reports to track progress against these KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Grow Your Business?</h2>
            <p className="cta-text">Contact us today for a free consultation and proposal.</p>
            <Link to="/contact" className="btn btn-light">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
