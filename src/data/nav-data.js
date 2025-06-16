import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { Link } from "gatsby";

export const navData = [
  "about",
  "news",
  "people",
  "research",
  "codes",
  "publications",
];
export const NavData = ({ side }) => {
  return (
    <>
      {navData.map((item, index) => (
        <li key={index} className="uppercase">
          {item === "about" ? (
            <Link to="/">
              <li className={`${side ? "side-nav indent-0" : "pl-2"}`}>
                {" "}
                {item}
              </li>
            </Link>
          ) : (
            <AnchorLink to={`/#${item}`}>
              <li
                className={`${side ? "side-nav indent-0" : "pl-2 uppercase"}`}
              >
                {" "}
                {item}
              </li>
            </AnchorLink>
          )}
        </li>
      ))}
    </>
  );
};
