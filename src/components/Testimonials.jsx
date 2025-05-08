"use client"

import { useState, useEffect } from "react"
import testimonialsData from "../data/testimonials.json"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setTestimonials(testimonialsData)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="section-subtitle">What our clients say about us</p>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonials-ratings">
            <div className="rating-card">
              <div className="rating-logo">Google</div>
              <div className="rating-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="rating-count">150+ Reviews</p>
            </div>

            <div className="rating-card">
              <div className="rating-logo">Clutch</div>
              <div className="rating-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="rating-count">50+ Reviews</p>
            </div>

            <div className="rating-card">
              <div className="rating-logo">UpCity</div>
              <div className="rating-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="rating-count">50+ Reviews</p>
            </div>
          </div>

          <div className="testimonials-slider">
            {testimonials.length > 0 && (
              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">{testimonials[activeIndex].testimonial}</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                      <p className="author-position">
                        {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="testimonial-controls">
              <button className="control-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="control-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot-btn ${index === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button className="control-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
