import { Link } from "react-router-dom"
import Testimonials from "../components/Testimonials"

const About = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / <span>About</span>
          </div>
        </div>
      </section>

      <section className="about-intro section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">
                Who We <span className="text-primary">Are</span>
              </h2>
              <p className="about-text">
                At MCEO, We are a team of passionate experts dedicated to helping business like yours thrive in this digital world.We Specialize in crafting socialmedia development and advertising to innovative website creation,voice-over services and more.With focus on creativity,quality and customer satisfaction,we help businesses like yours succeed online.
               
              </p>
              {/* <p className="about-text">
                Our team of experts is passionate about delivering exceptional results and building long-lasting
                relationships with our clients. We believe in transparency, integrity, and measurable outcomes.
              </p> */}
              {/* <div className="about-stats">
                <div className="stat-item">
                  <h3 className="stat-number">15+</h3>
                  <p className="stat-label">Years of Experience</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Satisfied Clients</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">50+</h3>
                  <p className="stat-label">Team Members</p>
                </div>
              </div> */}
            </div>
            <div className="about-image">
              <img src="/src/assets/images/about-image.jpg" alt="Thrive Agency Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision section bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To help businesses grow by delivering innovative digital marketing solutions that drive measurable
                results and provide exceptional value.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To be the most trusted digital marketing partner for businesses seeking sustainable growth and long-term
                success in the digital landscape.
              </p>
            </div>
            <div className="values-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="card-title">Our Values</h3>
              <p className="card-text">
                Integrity, transparency, innovation, excellence, and client success are the core values that guide
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="section-subtitle">The talented people behind our success</p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/images/team-1.jpg" alt="John Smith" />
                <div className="member-social">
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">John Smith</h3>
                <p className="member-position">CEO & Founder</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/images/team-2.jpg" alt="Sarah Johnson" />
                <div className="member-social">
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Sarah Johnson</h3>
                <p className="member-position">Marketing Director</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/images/team-3.jpg" alt="Michael Brown" />
                <div className="member-social">
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Michael Brown</h3>
                <p className="member-position">SEO Specialist</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/images/team-4.jpg" alt="Emily Davis" />
                <div className="member-social">
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Emily Davis</h3>
                <p className="member-position">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work With Us?</h2>
            <p className="cta-text">Let's create a tailored digital marketing strategy that drives results.</p>
            <Link to="/contact" className="btn btn-light">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
