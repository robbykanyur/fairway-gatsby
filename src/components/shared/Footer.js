import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="footer-link-column">
          <Link to="/" className="bold">
            Home
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Reviews</Link>
          <Link to="/">Leadership</Link>
          <span className="spacer"></span>
          <Link to="/" className="bold">
            Locations
          </Link>
          <Link to="/">Chandler</Link>
          <Link to="/">Scottsdale</Link>
          <Link to="/">West Valley</Link>
        </div>
        <div className="footer-link-column">
          <Link to="/" className="bold">
            Learn More
          </Link>
          <Link to="/">Products</Link>
          <Link to="/">Articles</Link>
          <Link to="/">Community</Link>
          <Link to="/">First-Time Buyers</Link>
          <Link to="/">Reverse Mortgages</Link>
          <span className="spacer"></span>
          <Link to="/" className="bold">
            Contact
          </Link>
          <Link to="/" className="bold">
            Careers
          </Link>
        </div>
        <div className="footer-link-column">
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Legal Disclosures</Link>
          <Link to="/">Licensing</Link>
          <span className="spacer"></span>
          <span className="spacer"></span>
          <Link to="/" className="bold">
            Complaints: 877-699-0353
          </Link>
          <Link to="/">customerservice@fairwaymc.com</Link>
          <Link to="/">www.nmlsconsumeraccess.org</Link>
        </div>
        <div className="footer-link-column">
          <Link to="/" className="bold">
            Fairway Phoenix
          </Link>
          <Link to="/">
            9977 N. 90th Street #150
            <br />
            Scottsdale, AZ 85258
          </Link>
          <Link to="/" className="medium">
            Additional Locations
          </Link>
          <span className="spacer"></span>
          <Link to="/">Phone: 480-739-1600</Link>
          <Link to="/">contact@fairwaymc.com</Link>
          <Link to="/">Fairway Independent Mortgage</Link>
          <Link to="/">Corp. (NMLS Entity ID #2289)</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
