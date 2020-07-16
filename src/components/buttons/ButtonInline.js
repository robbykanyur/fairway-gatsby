import React from "react"
import { Link } from "gatsby"

const ButtonInline = ({ url, text }) => {
  return <Link to={url}>{text}</Link>
}

export default ButtonInline
