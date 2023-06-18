import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const SubtitleIcon = ({ icon, smaller }) => {
  const icondata = icon.gatsbyImageData[0]
  return (
    <>
      <div className={`${smaller ? "w-7 h-7 pr-1" : "w-8 h-8"}`}>
        <GatsbyImage image={icondata} className="icon" />
      </div>
      <div className={`${smaller ? "w-7 h-7 pr-1 " : "w-8 h-8"}`}>
        <GatsbyImage image={icondata} />
      </div>
      <div className={`${smaller ? "w-7 h-7 pr-1" : "w-8 h-8"}`}>
        <GatsbyImage image={icondata} />
      </div>
    </>
  )
}
