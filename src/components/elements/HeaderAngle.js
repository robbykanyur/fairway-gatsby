import React from "react"

import { createUseStyles } from "react-jss"
import * as vars from "../../variables"

const createStyles = createUseStyles({
  angle: {
    display: "inline-block",
    fontFamily: vars.serif,
    fontSize: vars.type2XL,
    textAlign: "center",
    color: vars.colorWhite,
    backgroundColor: vars.colorRed,
    textTransform: "none",
    fontWeight: 400,
    clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
    opacity: "90%",
    padding: {
      top: vars.spacerM,
      right: vars.spacer5XL,
      bottom: vars.spacerM,
      left: vars.spacer5XL,
    },
  },
})

const HeaderAngle = props => {
  const classes = createStyles()
  return <h1 className={classes.angle}>{props.text}</h1>
}

export default HeaderAngle
