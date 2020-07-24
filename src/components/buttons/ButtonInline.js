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
    background: ${vars.colorRed};
    font-size: 16px;
    color: ${vars.colorWhite}!important;
    transition: all 0.2s;
    &:hover {
      background: ${vars.colorRedHover};
    }
  }
`

const ButtonInline = ({ url, text }) => {
  return (
    <StyledWrapper>
      <Link to={url} className="button-inline">
        {text}
      </Link>
    </StyledWrapper>
  )
}

export default ButtonInline
