import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";

export const Code = ({ codes, showLink, showGrid }) => {
  return (
    <div id="codes" className=" mt-20  bg-gray-50 pt-20 pb-20">
      <div className=" flex justify-center items-center flex-col ">
        <h2 className="text-center pb-20">
          {showLink ? <Link to="Codes">Codes</Link> : "Codes"}
        </h2>
        <ul
          className={`${
            showGrid
              ? "grid grid-cols-1 place-content-center w-full place-items-center gap-7 border"
              : " grid grid-cols-1 sm:grid-cols-2 gap-16  w-2/3 "
          }`}
        >
          {codes.map((item) => {
            return (
              <li
                key={item.id}
                className=" rounded-xl p-6  bg-white border border-gray-100 
              shadow-[0_4px_20px_-2px_rgba(124,58,237,0.1)]  "
              >
                <p className="subTitle">{item.frontmatter.title}</p>
                <div className="markdown text-xl">
                  <ReactMarkdown>{item.frontmatter.description}</ReactMarkdown>
                </div>
                {/* <p>{item.content}</p> */}

                <a
                  href={item.frontmatter.github}
                  className="pt-2 flex items-center hover:underline hover:text-Button"
                >
                  <FaGithubSquare />
                  <p className="pl-3 ">GitHub</p>
                </a>
                {/* <a
                  href={item.frontmatter.document}
                  className="pt-2 flex items-center hover:underline hover:text-Button"
                >
                  <GrDocument />
                  <p className="pl-3 ">Documentation</p>
                </a> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
