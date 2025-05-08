"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import blogPostsData from "../data/blogPosts.json"

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setPosts(blogPostsData)

    // Extract unique categories
    const uniqueCategories = [...new Set(blogPostsData.map((post) => post.category))]
    setCategories(uniqueCategories)
  }, [])

  const filteredPosts = posts
    .filter((post) => selectedCategory === "all" || post.category === selectedCategory)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Blog</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / <span>Blog</span>
          </div>
        </div>
      </section>

      <section className="blog-section section">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <div className="blog-search">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="blog-grid">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <article className="blog-card" key={post.id}>
                      <div className="blog-image">
                        <img src={post.image || "/placeholder.svg"} alt={post.title} />
                        <div className="blog-category">{post.category}</div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="blog-date">{post.date}</span>
                          <span className="blog-author">By {post.author}</span>
                        </div>
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <Link to={`/blog/${post.slug}`} className="blog-link">
                          Read More
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
                        </Link>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="no-results">
                    <p>No articles found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-widget categories-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  <li className="category-item">
                    <button
                      className={`category-link ${selectedCategory === "all" ? "active" : ""}`}
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Categories
                    </button>
                  </li>
                  {categories.map((category, index) => (
                    <li className="category-item" key={index}>
                      <button
                        className={`category-link ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget recent-posts-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <ul className="recent-posts-list">
                  {posts.slice(0, 5).map((post) => (
                    <li className="recent-post-item" key={post.id}>
                      <div className="post-image">
                        <img src={post.image || "/placeholder.svg"} alt={post.title} />
                      </div>
                      <div className="post-info">
                        <h4 className="post-title">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <span className="post-date">{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget subscribe-widget">
                <h3 className="widget-title">Subscribe</h3>
                <p className="widget-text">Get the latest marketing tips and insights delivered to your inbox.</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Your email address" className="form-input" required />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
