import React from "react"
import styled from "styled-components"
import vars from "../../vars"

const StyledH1 = styled.h1`
  display: inline-block;
  font-family: ${vars.serif};
  font-size: ${vars.type3XL};
  text-align: center;
  color: ${vars.colorWhite};
  background-color: ${vars.colorRed};
  text-transform: none;
  font-weight: 400;
  clip-path: polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%);
  opacity: 0.9;
  padding: ${vars.spacerXL} ${vars.spacer5XL};
  max-width: 100%;
  @media only screen and (max-width: 320px) {
    clip-path: none;
    width: 100%;
    font-size: ${vars.typeXL};
    padding-left: ${vars.spacerXS};
    padding-right: ${vars.spacerXS};
  }
`

const HeaderAngle = props => {
  return <StyledH1>{props.text}</StyledH1>
}

export default HeaderAngle
