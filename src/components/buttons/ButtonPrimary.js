import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

const StyledLink = styled(Link)`
  display: inline-block;
  width: 332px;
  font-family: ${vars.sans};
  text-transform: uppercase;
  font-weight: 900;
  text-decoration: none;
  color: ${vars.colorBlack};
  border: 6px solid ${vars.colorBlack};
  text-align: center;
  padding: ${vars.spacerS} 0;
  position: relative;
  z-index: 5000;
  height: 73px;
  font-size: ${vars.typeS};
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    right: 0;
    width: 104%;
    height: 33px;
    background: #cbfdff;
    z-index: 6000;
  }
  &::after {
    content: '${props => props.text}';
    position: relative;
    top: 3px;
    z-index: 7000;
  }
`

const ButtonPrimary = props => {
  return <StyledLink to={props.url} text={props.text}></StyledLink>
}

export default ButtonPrimary
