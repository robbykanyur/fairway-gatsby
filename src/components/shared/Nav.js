import React from "react"
import { Link } from "gatsby"

import ButtonInline from "../buttons/ButtonInline"

import iconFairway from "../../images/shared/shared-icon.svg"

const Nav = () => {
  const links = [
    { text: "About", url: "/about" },
    { text: "Locations", url: "/locations" },
    { text: "Reviews", url: "/reviews" },
    { text: "Learn More", url: "learn-more" },
  ]

  return (
    <nav>
      <div className="wrapper-nav-icon">
        <img
          src={iconFairway}
          width="100%"
          alt="Fairway Independent Mortgage Logo"
        />
      </div>
      <div className="wrapper-nav-links">
        {links.map((value, index) => {
          return (
            <Link key={index} to={value.url}>
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
