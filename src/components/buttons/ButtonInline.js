import React from "react"
import { Link } from "gatsby"

import { createUseStyles } from "react-jss"
import * as vars from "../../variables"
const createStyles = createUseStyles({
  button: {
    display: "inline-block",
    background: vars.colorRed,
    color: vars.colorWhite,
    textDecoration: "none",
    fontSize: vars.type2XS,
    fontFamily: vars.sans,
    fontWeight: 900,
    textTransform: "uppercase",
    padding: {
      top: vars.spacer2XS,
      right: vars.spacerM,
      bottom: vars.spacer2XS,
      left: vars.spacerM,
    },
    borderRadius: "38px",
  },
})

const ButtonInline = ({ url, text }) => {
  const classes = createStyles()
  return (
    <Link className={classes.button} to={url}>
      {text}
    </Link>
  )
}

export default ButtonInline
