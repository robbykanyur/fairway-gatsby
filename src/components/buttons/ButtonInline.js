import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import vars from "../../vars"

const StyledWrapper = styled(Link)`
  a {
    display: inline-block;
    text-decoration: none;
    font-family: ${vars.sans};
    font-weight: 900;
    text-transform: uppercase;
    padding: ${vars.spacer2XS} ${vars.spacerM};
    border-radius: 38px;
    background: #f08a81;
    font-size: 16px;
    color: ${vars.colorWhite}!important;
  }
`

const ButtonInline = ({ url, text }) => {
  return (
    <StyledWrapper>
      <Link to={url}>{text}</Link>
    </StyledWrapper>
  )
}

export default ButtonInline
