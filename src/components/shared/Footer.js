import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

import fairwayImage from "../../images/shared/shared-fairway.svg"
import ehlImage from "../../images/shared/shared-ehl.svg"

const StyledFooter = styled.footer`
  padding: ${vars.spacer4XL} 0 ${vars.spacerXL};
  background: ${vars.colorWhite};
  .links {
    width: ${vars.wrapper};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    font-family: ${vars.sans};
    text-decoration: none;
    font-size: ${vars.typeS};
    font-weight: 100;
  }
  li {
    display: block;
    height: 30px;
    line-height: 30px;
    &.double {
      height: 60px;
    }
    a {
      text-decoration: none;
      color: ${vars.colorBlack};
      &:hover {
        text-decoration: underline;
      }
    }
    .bold {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .logos {
    margin-top: ${vars.spacer3XL};
    opacity: 0.2;
    display: flex;
    align-items: center;
    justify-content: center;
    .fairway {
      width: 174px;
      margin-right: ${vars.spacerM};
    }
    .ehl {
      width: 43px;
      position: relative;
      top: 2px;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="links">
        <div className="link-column">
          <ul>
            <li>
              <Link to="/" className="bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Reviews</Link>
            </li>
            <li>
              <Link to="/">Leadership</Link>
            </li>
            <li></li>
            <li>
              <Link to="/" className="bold">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/">Chandler</Link>
            </li>
            <li>
              <Link to="/">Scottsdale</Link>
            </li>
            <li>
              <Link to="/">West Valley</Link>
            </li>
          </ul>
        </div>
        <div className="link-column">
          <ul>
            <li>
              <Link to="/" className="bold">
                Learn More
              </Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Articles</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
            <li>
              <Link to="/">First-Time Buyers</Link>
            </li>
            <li>
              <Link to="/">Reverse Mortgages</Link>
            </li>
            <li></li>
            <li>
              <Link to="/" className="bold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="bold">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="link-column">
          <ul>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Legal Disclosures</Link>
            </li>
            <li>
              <Link to="/">Licensing</Link>
            </li>
            <li></li>
            <li></li>
            <li>
              <span className="bold">Complaints: 877-699-0353</span>
            </li>
            <li>customerservice@fairwaymc.com</li>
            <li>
              <Link to="/">www.nmlsconsumeraccess.org</Link>
            </li>
          </ul>
        </div>
        <div className="link-column">
          <ul>
            <li>
              <span className="bold">Fairway Phoenix</span>
            </li>
            <li className="double">
              <Link to="/">
                9977 N. 90th Street #150
                <br />
                Scottsdale, AZ 85258
              </Link>
            </li>
            <li>
              <Link to="/" className="medium">
                Additional Locations
              </Link>
            </li>
            <li></li>
            <li>Phone: 480-739-1600</li>
            <li>contact@fairwaymc.com</li>
            <li>Fairway Independent Mortgage</li>
            <li>Corp. (NMLS Entity ID #2289)</li>
          </ul>
        </div>
      </div>
      <div className="logos">
        <Link to="/" className="fairway">
          <img src={fairwayImage} width="100%" alt="" />
        </Link>
        <Link to="/" className="ehl">
          <img src={ehlImage} width="100%" alt="" />
        </Link>
      </div>
    </StyledFooter>
  )
}

export default Footer
