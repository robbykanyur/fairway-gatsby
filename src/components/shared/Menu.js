import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import styled from "styled-components"
import vars from "../../vars"
import PropTypes from 'prop-types'

import ButtonInline from "../../components/buttons/ButtonInline"

import iconClose from "../../images/shared/shared-nav-close.svg"

const links = [
  { text: "About", url: "/about" },
  { text: "Locations", url: "/locations" },
  { text: "Reviews", url: "/reviews" },
  { text: "Learn More", url: "/learn-more" },
  { text: "Credit Help", url: "/credit" },
]

const Wrapper = ({ isMenuVisible }) => (
  <div className={`${isMenuVisible ? "isVisible" : null}`}>
      <div className="close">
        <button>
          <img src={iconClose} width="100%" alt="" />
        </button>
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
)

Wrapper.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired
}

const mapStateToProps = ({ isMenuVisible }) => {
  return { isMenuVisible }
}

const mapDispatchToProps = dispatch => {
  return { toggleMenu: () => dispatch({ type: 'TOGGLE_MENU' })}
}

const ConnectedWrapper = connect(mapStateToProps, mapDispatchToProps)(Wrapper)


class Menu extends React.Component {
  render() {
    return (
    <ConnectedWrapper />
    )
  }
}

const StyledMenu = styled(Menu)`
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
  @media only screen and (max-width: 320px) {
    display: block;
    transition: top 0.5s ease-in-out;
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
      margin-right: 0;
      margin-bottom: ${vars.spacerL};
      font-size: ${vars.typeM};
      &:last-child {
        margin-bottom: 0;
      }
      .button-inline {
        background: ${vars.colorWhite};
        color: ${vars.colorRed}!important;
      }
    }
    .close {
      display: block;
      position: absolute;
      /* top: ${vars.spacerS}; */
      /* right: ${vars.spacerS}; */
      top: 0;
      right: 0;
      z-index: 9200;
      width: 48px;
      height: 48px;
      padding: 0;
    }
    &.isVisible {
      top: 0;
    }
  }
`

export default StyledMenu
