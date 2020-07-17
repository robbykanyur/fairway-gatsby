import React from "react"
import { Link } from "gatsby"
import { createUseStyles } from "react-jss"

import ButtonInline from "../buttons/ButtonInline"
import iconFairway from "../../images/shared/shared-icon.svg"

import * as vars from "../../variables"
const createStyles = createUseStyles({
  wrapper: {
    backgroundColor: vars.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: {
      top: vars.spacerS,
      bottom: vars.spacerS,
    },
  },
  icon: {
    width: "45px",
  },
  link: {
    fontFamily: vars.sans,
    fontWeight: 900,
    fontSize: vars.type2XS,
    textTransform: "uppercase",
    textDecoration: "none",
    marginRight: vars.spacerS,
    color: vars.grayLightOne,
  },
})

const Nav = () => {
  const links = [
    { text: "About", url: "/about" },
    { text: "Locations", url: "/locations" },
    { text: "Reviews", url: "/reviews" },
    { text: "Learn More", url: "learn-more" },
  ]

  const classes = createStyles()

  return (
    <nav className={classes.wrapper + " wrapper"}>
      <div className={classes.icon}>
        <img
          src={iconFairway}
          width="100%"
          alt="Fairway Independent Mortgage Logo"
        />
      </div>
      <div>
        {links.map((value, index) => {
          return (
            <Link className={classes.link} key={index} to={value.url}>
              {value.text}
            </Link>
          )
        })}
        <ButtonInline url="/" text="Get Approved" />
      </div>
    </nav>
  )
}

export default Nav
