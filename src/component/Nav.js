import React, { useState } from "react";
import { NavData } from "../data/nav-data";
import { FiMenu } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const Nav = () => {
  const [toggleSideMenue, setToggleSideMenue] = useState(false);
  const sideMenue = () => {
    setToggleSideMenue(!toggleSideMenue);
  };
  return (
    <>
      <div className="fixed top-0 w-full bg-gray-300 h-14 z-50">
        <ul className="hidden sm:flex justify-end w-5/6 max-w-6xl items-center h-full gap-2 mx-auto pr-0">
          <li className="mr-auto text-xl font-bold">WEN GROUP</li>
          <NavData />
          {/* <Link to="/blogs">
            <li className="uppercase pl-2 ">blog</li>
          </Link> */}

          {/* In the below line, should use `news` instead of `about`; hotfix to ensure jump to the top */}
          <AnchorLink to="/#position">
            <li className="uppercase pl-2">openings</li>
          </AnchorLink>
          <li className="pl-2">
            <a
              href="https://wengroup.github.io/group_manual"
              target="_blank"
              rel="noreferrer noopener"
            >
              WIKI
            </a>
          </li>
        </ul>
        <button
          className="sm:hidden absolute right-3 top-4 text-3xl"
          onClick={() => sideMenue()}
        >
          <FiMenu />
        </button>
      </div>
      <CSSTransition
        in={toggleSideMenue}
        timeout={300}
        unmountOnExit={true}
        className={
          " fixed bg-gray-200 shadow-inner w-full z-40 sm:hidden pt-4 rounded-md"
        }
      >
        <ul>
          <NavData side />
          {/* <h1 className="px-3 side-nav flex flex-col">
            <Link to="/blogs/">BLOG</Link>
          </h1> */}

          <h1 className="px-3 side-nav">
            <AnchorLink to="/#news">NEWS</AnchorLink>
          </h1>
          <li className="side-nav flex flex-col px-3">
            <a
              href="https://wengroup.github.io/group_manual"
              target="_blank"
              rel="noreferrer noopener"
            >
              WIKI
            </a>
          </li>
        </ul>
      </CSSTransition>
    </>
  );
};
