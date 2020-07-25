import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

import Menu from "../../components/shared/Menu"
import iconFairway from "../../images/shared/shared-icon.svg"
import iconMenu from "../../images/shared/shared-nav-menu.svg"

const StyledWrapper = styled.div`
  width: ${vars.wrapper};
  max-width: 100%;
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
    button {
      display: none;
      appearance: none;
      border: 0;
      background: 0;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 29px;
      right: 16px;
      width: 32px;
    }
  }
  @media only screen and (max-width: 320px) {
    width: 100%;
    nav {
      .icon {
        margin-left: auto;
        margin-right: auto;
      }
      button {
        display: block;
      }
    }
  }
`

const Nav = props => {
  return (
    <StyledWrapper>
      <nav>
        <div className="icon">
          <Link to="/">
            <img
              src={iconFairway}
              width="100%"
              alt="Fairway Independent Mortgage Logo"
            />
          </Link>
        </div>
        <button>
          <img src={iconMenu} width="100%" alt="" />
        </button>
        <Menu />
      </nav>
    </StyledWrapper>
  )
}

export default Nav
