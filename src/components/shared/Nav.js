import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

import ButtonInline from "../buttons/ButtonInline"
import iconFairway from "../../images/shared/shared-icon.svg"

const StyledWrapper = styled.div`
  width: ${vars.wrapper};
  margin: 0 auto;
  nav {
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${vars.spacerS} 0;
    .icon {
      width: 45px;
    }
    a {
      text-transform: uppercase;
      text-decoration: none;
      font-size: ${vars.typeXS};
      font-family: ${vars.sans};
      color: ${vars.grayLightOne};
      margin-right: ${vars.spacerL};
      font-weight: 700;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: ${vars.grayDarkOne};
        transition: all 0.2s;
      }
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
