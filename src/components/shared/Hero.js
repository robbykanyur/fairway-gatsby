import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Hero = props => {
  return <StyledWrapper img={props.img}>{props.children}</StyledWrapper>
}

export default Hero
