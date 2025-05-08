"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/logo.jpeg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo || "/placeholder.svg"} alt="Thrive Agency Logo" />
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>

        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar-contact">
          <a href="tel:866-908-4748" className="phone-link">
            80084 08018
          </a>
          
        </div>
      </div>
    </header>
  )
}

export default Navbar
