import Hero from "../components/Hero"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import BlogHighlights from "../components/BlogHighlights"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Hero />

      {/* <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">2.4M+</h3>
              <p className="stat-label">Conversions Generated</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">$14.6M+</h3>
              <p className="stat-label">Revenue Generated</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Years of Experience</p>
            </div>
          </div>
        </div>
      </section> */}

      <Services />

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Grow Your Business?</h2>
            <p className="cta-text">Let's create a tailored digital marketing strategy that drives results.</p>
            <Link to="/contact" className="btn btn-light">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* <Portfolio />
      <Testimonials />
      <BlogHighlights /> */}

      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-grid">
            <div className="contact-cta-content">
              <h2 className="contact-cta-title">Let's Discuss Your Project</h2>
              <p className="contact-cta-text">
                Ready to take your digital presence to the next level? Contact us today for a free consultation.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="contact-cta-image">
              <img src="/src/assets/images/contact-cta.jpg" alt="Contact Us" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
