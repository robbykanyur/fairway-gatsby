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
  &:hover .hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  .hover {
    transition: clip-path 0.2s ease-in-out;
    position: absolute;
    top: 15px;
    right: 0;
    width: 104%;
    height: 33px;
    background: #000000;
    color: #ffffff;
    z-index: 7000;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    &::before {
      content: '${props => props.text}';
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 8000;
      padding-left: 6px;
      top: 8px;
    }
  }
  .standard {
    position: absolute;
    top: 15px;
    right: 0;
    width: 104%;
    height: 33px;
    background: #cbfdff;
    z-index: 5000;
    &::before {
      content: '${props => props.text}';
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 6000;
      padding-left: 6px;
      top: 8px;
    }
  }
  @media only screen and (max-width: 320px) {
    max-width: 90%;
  }
`

const ButtonPrimary = props => {
  return (
    <StyledLink to={props.url} text={props.text}>
      <div class="hover"></div>
      <div class="standard"></div>
    </StyledLink>
  )
}

export default ButtonPrimary
