import React, { useState } from "react"
import { NavData } from "../data/nav-data"
import { FiMenu } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export const Nav = () => {
  const [toggleSideMenue, setToggleSideMenue] = useState(false)
  const sideMenue = () => {
    setToggleSideMenue(!toggleSideMenue)
  }
  return (
    <>
      <div className="fixed top-0 w-full bg-gray-200 h-14 z-50">
        <ul className="hidden sm:flex justify-end w-5/6 max-w-6xl items-center h-full gap-2 mx-auto pr-0">
          <NavData />
          <Link to="/blogs">
            <li className="uppercase hover:text-Hightlight pl-3 btn">blog</li>
          </Link>
          {/* In the below line, should use `news` instead of `about`; hotfix to ensure jump to the top */}
          <AnchorLink to="/#position">
            <li className="uppercase hover:text-Hightlight mr-7 btn">
              openings
            </li>
          </AnchorLink>
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
          <h1 className="px-3 side-nav flex flex-col">
            <Link to="/blogs/">BLOG</Link>
          </h1>
          <h1 className="px-3 side-nav">
            <AnchorLink to="/#news">NEWS</AnchorLink>
          </h1>
        </ul>
      </CSSTransition>
    </>
  )
}
