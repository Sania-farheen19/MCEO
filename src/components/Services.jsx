"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import servicesData from "../data/services.json"

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setServices(servicesData)
  }, [])

  return (
    <section className="services section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle">Comprehensive digital marketing solutions to grow your business</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <img src={service.icon || "/placeholder.svg"} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {/* <Link to={`/services/${service.slug}`} className="service-link">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link> */}
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
