import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

import ButtonInline from "../buttons/ButtonInline"
import iconFairway from "../../images/shared/shared-icon.svg"
import iconClose from "../../images/shared/shared-nav-close.svg"
import iconMenu from "../../images/shared/shared-nav-menu.svg"

class Nav extends Component {
  render() {
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
        .close {
          display: none;
        }
        .menu {
          display: none;
        }
      }
      @media only screen and (max-width: 320px) {
        width: ${vars.px320wrapper};
        nav {
          .icon {
            margin-left: auto;
            margin-right: auto;
          }
          .menu {
            display: block;
            position: absolute;
            top: 29px;
            right: 14px;
            width: 32px;
          }
          .links {
            transition: top 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            position: absolute;
            align-items: center;
            justify-content: center;
            width: 100%;
            top: -100%;
            left: 0;
            height: 100vh;
            z-index: 9000;
            background: ${vars.colorRed};
            a {
              color: ${vars.colorWhite};
              text-align: center;
              margin-right: 0;
              margin-bottom: ${vars.spacerL};
              font-size: ${vars.typeM};
              &:last-child {
                margin-bottom: 0;
              }
              .button-inline {
                background: ${vars.colorWhite}!important;
                color: ${vars.colorRed}!important;
              }
            }
            .close {
              display: block;
              position: absolute;
              top: ${vars.spacerS};
              right: ${vars.spacerS};
              z-index: 9200;
              width: 48px;
            }
            &.isVisible {
              top: 0;
            }
          }
        }
      }
    `
    const links = [
      { text: "About", url: "/about" },
      { text: "Locations", url: "/locations" },
      { text: "Reviews", url: "/reviews" },
      { text: "Learn More", url: "/learn-more" },
      { text: "Credit Help", url: "/credit" },
    ]

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
          <div className="menu">
            <Link to="/">
              <img src={iconMenu} width="100%" alt="" />
            </Link>
          </div>
          <div className="links">
            <div className="close">
              <Link to="/">
                <img src={iconClose} width="100%" alt="" />
              </Link>
            </div>
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
}

export default Nav
