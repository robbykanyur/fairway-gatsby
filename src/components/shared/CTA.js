import React from "react"
import vars from "../../vars"
import theme from "../../theme"
import styled, { ThemeProvider } from "styled-components"

import grainImage from "../../images/shared/shared-noise.png"

const StyledCTA = styled.div`
  padding: 100px 0;
  background: ${vars.colorRed};
  background-image: ${props => `url(${props.bg})`};
  h1 {
    ${props => props.theme.headingSans1};
    color: ${vars.colorWhite};
  }
  p {
    color: ${vars.colorWhite};
    width: 700px;
    margin: 0 auto ${vars.spacer2XL};
    text-align: center;
  }
  span {
    display: block;
    width: 100%;
    text-align: center;
  }
`

const CTA = props => {
  return (
    <ThemeProvider theme={theme}>
      <StyledCTA className="cta-block" bg={grainImage}>
        {props.children}
      </StyledCTA>
    </ThemeProvider>
  )
}

export default CTA
