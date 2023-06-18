import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"
import { Link } from "gatsby"

export const navData = ["about", "publications", "people", "research", "codes"]
export const NavData = ({ side }) => {
  return (
    <>
      {navData.map((item, index) => (
        <li
          key={index}
          className="uppercase hover:text-Hightlight border-orange-600"
        >
          {item === "about" ? (
            <Link to="/">
              <h1 className={`${side ? "side-nav indent-0" : "btn"}`}>
                {" "}
                {item}
              </h1>
            </Link>
          ) : (
            <AnchorLink to={`/#${item}`}>
              <h1 className={`${side ? "side-nav indent-0" : "btn"}`}>
                {" "}
                {item}
              </h1>
            </AnchorLink>
          )}
        </li>
      ))}
    </>
  )
}
