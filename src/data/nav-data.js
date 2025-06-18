import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { Link } from "gatsby";

export const navData = [
  "about",
  "news",
  "people",
  "research",
  "codes",
  "openings",
  "publications",
];
export const NavData = ({ side }) => {
  return (
    <>
      {navData.map((item, index) => (
        <li key={index} className=" font-roboto capitalize">
          {item === "about" ? (
            <Link to="/">
              <li
                className={`${side ? "side-nav indent-0 font-roboto" : "pl-2"}`}
              >
                {" "}
                {item}
              </li>
            </Link>
          ) : (
            <AnchorLink to={`/#${item}`}>
              <li
                className={`${
                  side
                    ? "side-nav indent-0 font-roboto capitalize"
                    : "pl-2 font-roboto capitalize"
                }`}
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
