"use client"

import { useState } from "react"
import heroImage from "../assets/hero-bg.jpg"

const Hero = () => {
  const [websiteUrl, setWebsiteUrl] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Website URL submitted:", websiteUrl)
    // Reset form
    setWebsiteUrl("")
  }

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">DIGITAL MARKETING AGENCY DRIVEN BY</h2>
          <h1 className="hero-title">
            <span className="text-primary">RELATIONSHIPS</span>
            <br />
            <span className="text-secondary">&</span>
            <span className="text-primary"> RESULTS</span>
          </h1>
          <form className="hero-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                required
                className="form-input"
              />
              <button type="submit" className=" btn btn-primary">
                GET MY FREE PROPOSAL
              </button>
            </div>
          </form>
          {/* <div className="hero-partners">
            <img src="/src/assets/images/partner-1.png" alt="Inc 5000" className="partner-logo" />
            <img src="/src/assets/images/partner-2.png" alt="Google Partner" className="partner-logo" />
            <img src="/src/assets/images/partner-3.png" alt="Meta Business Partner" className="partner-logo" />
            <img src="/src/assets/images/partner-4.png" alt="IFA Member" className="partner-logo" />
            <img src="/src/assets/images/partner-5.png" alt="Shopify Partner" className="partner-logo" />
          </div> */}
        </div>
        <div className="hero-image-container">
          <div className="hero-image-bg"></div>
          <img src={heroImage || "/placeholder.svg"} alt="Digital Marketing Expert" className="hero-image" />
          <div className="hero-quote">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              At MCEO, our company's growth is directly attributed to the growth of our clients.
            </p>
            <p className="quote-author">— Saba</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
