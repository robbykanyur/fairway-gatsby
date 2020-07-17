import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../../theme"

const StyledWrapper = styled(Link)`
  a {
    display: inline-block;
    text-decoration: none;
    font-family: ${theme.sans};
    font-weight: 900;
    text-transform: uppercase;
    padding: ${theme.spacer2XS} ${theme.spacerM};
    border-radius: 38px;
    background: #f08a81;
    font-size: 16px;
    color: ${theme.colorWhite}!important;
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
