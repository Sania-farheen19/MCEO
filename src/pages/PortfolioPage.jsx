"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import portfolioData from "../data/portfolio.json"

const PortfolioPage = () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setProjects(portfolioData)
  }, [])

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Portfolio</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / <span>Portfolio</span>
          </div>
        </div>
      </section>

      <section className="portfolio-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Our <span className="text-primary">Work</span>
            </h2>
            <p className="section-subtitle">Check out some of our recent projects</p>
          </div>

          <div className="portfolio-filters">
            <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
              All
            </button>
            <button
              className={`filter-btn ${filter === "web-design" ? "active" : ""}`}
              onClick={() => setFilter("web-design")}
            >
              Web Design
            </button>
            <button className={`filter-btn ${filter === "seo" ? "active" : ""}`} onClick={() => setFilter("seo")}>
              SEO
            </button>
            <button className={`filter-btn ${filter === "ppc" ? "active" : ""}`} onClick={() => setFilter("ppc")}>
              PPC
            </button>
            <button
              className={`filter-btn ${filter === "social-media" ? "active" : ""}`}
              onClick={() => setFilter("social-media")}
            >
              Social Media
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div className="portfolio-item" key={project.id}>
                <div className="portfolio-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className="portfolio-overlay">
                    <Link to={`/portfolio/${project.slug}`} className="portfolio-link">
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="stats-section bg-light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Industries Served</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Awards Won</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
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

export default PortfolioPage
