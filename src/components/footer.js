import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="site-footer">
      <h4 className="text-center">Code Blog</h4>
      <p className="text-center">follow us on social media</p>
      <div className="footer-social-links">
        <ul className="social-links-list">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FaFacebook size="2rem" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FaInstagram size="2rem" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <FaTwitter size="2rem" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedin size="2rem" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
