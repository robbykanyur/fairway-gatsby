import React from "react"
import { createUseStyles } from "react-jss"

const HeroBlock = props => {
  const useStyles = createUseStyles({
    heroWrapper: {
      backgroundImage: `url(${props.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })

  const classes = useStyles()

  return <div className={classes.heroWrapper}>{props.children}</div>
}

export default HeroBlock
