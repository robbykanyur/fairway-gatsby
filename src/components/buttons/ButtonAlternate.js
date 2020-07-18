import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

const StyledLink = styled(Link)`
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
  &::before {
    content: "";
    border: 2px solid ${vars.colorRed};
    position: absolute;
    top: 9px;
    left: 9px;
    width: 306px;
    height: 59px;
  }
`

const ButtonAlternate = props => {
  return (
    <StyledLink to={props.url} className="button-alternate">
      {props.text}
    </StyledLink>
  )
}

export default ButtonAlternate
