import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { Link } from "gatsby";

export const navData = [
  "news",
  "people",
  "research",
  "codes",
  "openings",
  "publications",
  "Wiki",
];
export const NavData = ({ side, activeItem, setActiveItem }) => {
  return (
    <>
      {navData.map((item, index) => (
        <li key={index} className=" font-roboto capitalize">
          {item === "about" ? (
            <Link to="/" onClick={() => setActiveItem(item)}>
              <li
                className={`${side ? "side-nav indent-0 font-roboto" : ""} ${
                  activeItem === item ? "font-extrabold" : ""
                }`} // 动态加粗
              >
                {item}
              </li>
            </Link>
          ) : item === "Wiki" ? (
            <a
              href="https://wengroup.github.io/group_manual"
              target="_blank"
              rel="noreferrer noopener"
              className={`${
                side
                  ? "side-nav indent-0 font-roboto capitalize "
                  : " font-roboto capitalize bg-"
              }`}
            >
              Wiki
            </a>
          ) : item === "Blogs" ? (
            <Link to="/blogs">
              <li className=" capitalize font-roboto  ">blogs</li>
            </Link>
          ) : (
            <AnchorLink
              to={`/#${item}`}
              onAnchorLinkClick={() => setActiveItem(item)}
            >
              <li
                className={`${
                  side
                    ? "side-nav indent-0 font-roboto capitalize"
                    : " font-roboto capitalize "
                } ${activeItem === item ? "font-extrabold" : ""}`} // 动态加粗
              >
                {item}
              </li>
            </AnchorLink>
          )}
        </li>
      ))}
    </>
  );
};
