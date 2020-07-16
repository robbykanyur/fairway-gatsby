import React from "react"

const HeroBlock = props => {
  return (
    <div className="block block-hero">
      <div className="block-hero-image">
        <img src={props.img} width="100%" alt="" />
        <div className="block-hero-content">{props.children}</div>
      </div>
    </div>
  )
}

export default HeroBlock
