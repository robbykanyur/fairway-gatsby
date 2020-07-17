import React from "react"
import styled from "styled-components"
import theme from "../../theme"

const StyledH1 = styled.h1`
  display: inline-block;
  font-family: ${theme.serif};
  font-size: ${theme.type3XL};
  text-align: center;
  color: ${theme.colorWhite};
  background-color: ${theme.colorRed};
  text-transform: none;
  font-weight: 400;
  clip-path: polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%);
  opacity: 0.9;
  padding: ${theme.spacerXL} ${theme.spacer5XL};
`

const HeaderAngle = props => {
  return <StyledH1>{props.text}</StyledH1>
}

export default HeaderAngle
