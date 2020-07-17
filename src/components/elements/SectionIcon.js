import React from "react"
import styled from "styled-components"
import theme from "../../theme"

const StyledIconWrapper = styled.div`
  width: 150px;
  margin: 0 auto ${theme.spacerS};
`

const SectionIcon = props => {
  return (
    <StyledIconWrapper>
      <img src={props.img} width="100%" alt="" />
    </StyledIconWrapper>
  )
}

export default SectionIcon
