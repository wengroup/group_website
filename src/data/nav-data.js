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
export const NavData = ({ side }) => {
  return (
    <>
      {navData.map((item, index) => (
        <li key={index} className=" font-roboto capitalize">
          {item === "Wiki" ? (
            <a
              href="https://wengroup.github.io/group_manual"
              target="_blank"
              rel="noreferrer noopener"
              className={`${
                side
                  ? "side-nav indent-0 hover:text-Hightlight btn"
                  : "  hover:text-Hightlight btn"
              }`}
            >
              Wiki
            </a>
          ) : (
            // item === "Blogs" ? (
            //   <Link to="/blogs">
            //     <li className=" capitalize font-roboto hover:text-Hightlight btn">
            //       blogs
            //     </li>
            //   </Link>
            // ) :
            <AnchorLink
              to={`/#${item}`}
              className={`${
                side
                  ? "side-nav indent-0  hover:text-Hightlight btn"
                  : "hover:text-Hightlight btn "
              } `}
              // onAnchorLinkClick={() => setActiveItem(item)}
            >
              {item}
            </AnchorLink>
          )}
        </li>
      ))}
    </>
  );
};
