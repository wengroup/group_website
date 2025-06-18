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
  "WIKI",
];
export const NavData = ({ side, activeItem, setActiveItem }) => {
  return (
    <>
      {navData.map((item, index) => (
        <li key={index} className=" font-roboto capitalize">
          {item === "about" ? (
            <Link to="/" onClick={() => setActiveItem(item)}>
              <li
                className={`${
                  side ? "side-nav indent-0 font-roboto" : "pl-2"
                } ${activeItem === item ? "font-extrabold" : ""}`} // 动态加粗
              >
                {item}
              </li>
            </Link>
          ) : item === "WIKI" ? ( // 新增 WIKI 条件判断
            <a
              href="https://wengroup.github.io/group_manual"
              target="_blank"
              rel="noreferrer noopener"
              className={`${
                side
                  ? "side-nav indent-0 font-roboto capitalize"
                  : "pl-2 font-roboto capitalize"
              }`}
            >
              WIKI
            </a>
          ) : (
            <AnchorLink
              to={`/#${item}`}
              onAnchorLinkClick={() => setActiveItem(item)}
            >
              <li
                className={`${
                  side
                    ? "side-nav indent-0 font-roboto capitalize"
                    : "pl-2 font-roboto capitalize"
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
