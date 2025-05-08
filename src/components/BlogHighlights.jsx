"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import blogPostsData from "../data/blogPosts.json"

const BlogHighlights = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    // Get only the 3 most recent posts
    setPosts(blogPostsData.slice(0, 3))
  }, [])

  return (
    <section className="blog-highlights section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="section-subtitle">Digital marketing tips, trends, and strategies</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
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
          ))}
        </div>

        <div className="blog-cta">
          <Link to="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogHighlights
