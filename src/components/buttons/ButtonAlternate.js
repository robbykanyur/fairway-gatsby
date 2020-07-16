import React from "react"
import { Link } from "gatsby"

const ButtonAlternate = props => {
  return (
    <Link to={props.url} className="button-alternate">
      {props.text}
    </Link>
  )
}

export default ButtonAlternate
