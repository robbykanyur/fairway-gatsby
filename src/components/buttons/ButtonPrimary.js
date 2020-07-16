import React from "react"
import { Link } from "gatsby"

const ButtonPrimary = props => {
  return (
    <Link to={props.url} className="button-primary">
      {props.text}
    </Link>
  )
}

export default ButtonPrimary
