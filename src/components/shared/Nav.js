import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../../theme"

import ButtonInline from "../buttons/ButtonInline"
import iconFairway from "../../images/shared/shared-icon.svg"

const StyledWrapper = styled.div`
  width: ${theme.wrapper};
  margin: 0 auto;
  nav {
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacerS} 0;
    .icon {
      width: 45px;
    }
    a {
      text-transform: uppercase;
      text-decoration: none;
      font-size: ${theme.typeXS};
      font-family: ${theme.sans};
      color: ${theme.grayLightOne};
      margin-right: ${theme.spacerL};
      font-weight: 700;
    }
  }
`

const Nav = () => {
  const links = [
    { text: "About", url: "/about" },
    { text: "Locations", url: "/locations" },
    { text: "Reviews", url: "/reviews" },
    { text: "Learn More", url: "learn-more" },
  ]

  return (
    <StyledWrapper>
      <nav>
        <div className="icon">
          <img
            src={iconFairway}
            width="100%"
            alt="Fairway Independent Mortgage Logo"
          />
        </div>
        <div>
          {links.map((value, index) => {
            return (
              <Link key={index} to={value.url}>
                {value.text}
              </Link>
            )
          })}
          <ButtonInline url="/" text="Get Approved" />
        </div>
      </nav>
    </StyledWrapper>
  )
}

export default Nav
