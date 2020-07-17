import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../../theme"

import ButtonInline from "../buttons/ButtonInline"
import iconFairway from "../../images/shared/shared-icon.svg"

const StyledWrapper = styled.div`
  width: ${theme.wrapperWidth};
  margin: 0 auto;
`

const StyledNav = styled.nav`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacerS} 0;
`

const StyledIcon = styled.div`
  width: 45px;
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${theme.typeXS};
  font-family: ${theme.sans};
  color: ${theme.grayLightOne};
  margin-right: ${theme.spacerL};
  font-weight: 700;
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
      <StyledNav>
        <StyledIcon>
          <img
            src={iconFairway}
            width="100%"
            alt="Fairway Independent Mortgage Logo"
          />
        </StyledIcon>
        <div>
          {links.map((value, index) => {
            return (
              <StyledLink key={index} to={value.url}>
                {value.text}
              </StyledLink>
            )
          })}
          <ButtonInline url="/" text="Get Approved" />
        </div>
      </StyledNav>
    </StyledWrapper>
  )
}

export default Nav
