"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import portfolioData from "../data/portfolio.json"

const Portfolio = () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setProjects(portfolioData)
  }, [])

  const filteredProjects =
    filter === "all"
      ? projects.slice(0, 6) // Show only 6 projects on homepage
      : projects.filter((project) => project.category === filter).slice(0, 6)

  return (
    <section className="portfolio section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="section-subtitle">Check out some of our recent work</p>
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

        <div className="portfolio-cta">
          <Link to="/portfolio" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
