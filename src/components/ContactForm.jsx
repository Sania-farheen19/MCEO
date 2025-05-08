"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    })

    // In a real app, you would send the form data to your backend
    console.log("Form submitted:", formData)

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      service: "",
      message: "",
    })

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      })
    }, 5000)
  }

  return (
    <div className="contact-form">
      <h2 className="form-title">Get In Touch</h2>
      <p className="form-subtitle">Fill out the form below and we'll get back to you shortly</p>

      {formStatus.submitted && (
        <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-row">
          {/* <div className="form-group">
            <label htmlFor="website">Website URL</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="form-control"
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select a service</option>
              <option value="seo">Social Media Development</option>
              <option value="ppc">Advertisements & Campaigns</option>
              <option value="social-media">Creative Reel Production</option>
              <option value="web-design"> Professional Voice-Over Services</option>
              <option value="content-marketing">Stunning Poster Designs</option>
              <option value="email-marketing">Offline  Media & Printing</option>
              <option value="other">Website design & Development</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-control"
            rows="5"
          ></textarea>
        </div>

        <div className="form-group form-check">
          <input type="checkbox" id="consent" name="consent" required className="form-check-input" />
          <label htmlFor="consent" className="form-check-label">
            I agree to the <a href="/privacy-policy">Privacy Policy</a> and consent to being contacted.
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
