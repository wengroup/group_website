import React from "react"

export const SubtitleIconSvg = ({ icon, smaller }) => {
  return (
    <>
      <div className={`${smaller ? "w-7 h-7 pr-1" : "w-8 h-8"}`}>
        <img src={icon} alt="icon" />
      </div>
      <div className={`${smaller ? "w-7 h-7 pr-1" : "w-8 h-8"}`}>
        <img src={icon} alt="icon" />
      </div>
      <div className={`${smaller ? "w-7 h-7 pr-1" : "w-8 h-8"}`}>
        <img src={icon} alt="icon" />
      </div>
    </>
  )
}
