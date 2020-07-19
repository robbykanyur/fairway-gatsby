import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

const StyledLink = styled(Link)`
  .wrapper {
    height: 83px;
    width: 327px;
    display: inline-block;
  }
  .button {
    display: inline-block;
    width: 327px;
    height: 80px;
    text-align: center;
    color: ${vars.colorRed};
    background: ${vars.colorWhite};
    line-height: 85px;
    font-family: ${vars.sans};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    position: relative;
    bottom: 0px;
    transition: all 0.1s;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    &::before {
      content: "";
      border: 2px solid ${vars.colorRed};
      position: absolute;
      top: 9px;
      left: 9px;
      width: 306px;
      height: 59px;
    }
    &:hover {
      bottom: 2px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    }
  }
`

const ButtonAlternate = props => {
  return (
    <StyledLink to={props.url} className="button-alternate">
      <div class="button">{props.text}</div>
    </StyledLink>
  )
}

export default ButtonAlternate
