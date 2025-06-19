import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { Link } from "gatsby";
import { SubtitleIcon } from "./SubtitleIcon";
import { useStaticQuery, graphql } from "gatsby";
import { SubtitleIconSvg } from "./SubtitleIconSvg";
import ReactMarkdown from "react-markdown";
const query = graphql`
  {
    file(name: { eq: "code" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`;

export const Code = ({ codes, showLink, showGrid }) => {
  const data = useStaticQuery(query);

  return (
    <div id="codes" className=" mt-20  bg-slate-50 pt-20 pb-20">
      <div className=" ">
        <h2 className="text-center pb-20">
          {showLink ? <Link to="Codes">Codes</Link> : "Codes"}
        </h2>
        {/* <div className="flex flex-row justify-center pb-6 mb-10">
        {data.file.childrenImageSharp == [] ? (
          <SubtitleIcon icon={data.file.childrenImageSharp} />
        ) : (
          <SubtitleIconSvg icon={data.file.publicURL} />
        )}
      </div> */}
        <ul
          className={`${
            showGrid
              ? "grid grid-cols-1 place-content-center w-full place-items-center gap-7 border"
              : "px-10 grid grid-cols-1 sm:grid-cols-2 gap-16 sm:px-40 "
          }`}
        >
          {codes.map((item) => {
            return (
              <li
                key={item.id}
                className=" rounded-lg p-5 bg-slate-300  max-w-3xl w-full"
              >
                <p className="subTitle">{item.frontmatter.title}</p>
                <p>
                  <ReactMarkdown
                    children={item.frontmatter.description}
                    className="markdown"
                  />
                </p>
                {/* <p>{item.content}</p> */}

                <a
                  href={item.frontmatter.github}
                  className="pt-2 flex items-center hover:underline hover:text-Button"
                >
                  <FaGithubSquare />
                  <p className="pl-3 ">GitHub</p>
                </a>
                <a
                  href={item.frontmatter.document}
                  className="pt-2 flex items-center hover:underline hover:text-Button"
                >
                  <GrDocument />
                  <p className="pl-3 ">Documentation</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
