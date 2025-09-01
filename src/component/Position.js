import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SubtitleIcon } from "./SubtitleIcon";
import { SubtitleIconSvg } from "./SubtitleIconSvg";
import ReactMarkdown from "react-markdown";
const query = graphql`
  {
    file(name: { eq: "position" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`;

export const Position = ({ positions }) => {
  const data = useStaticQuery(query);
  return (
    <div id="openings" className="">
      <h2 className=" text-center pt-20 pb-20">Openings</h2>
      {/* <div className="flex flex-row justify-center mb-10">
        {data.file.childrenImageSharp == [] ? (
          <SubtitleIcon icon={data.file.childrenImageSharp} />
        ) : (
          <SubtitleIconSvg icon={data.file.publicURL} />
        )}
      </div> */}
      <ul className="sm:w-128 flex mx-auto w-5/6 flex-col">
        {positions.map((p) => {
          return (
            <li key={p.id} className=" mb-14">
              <h2 className="text-center sm:text-left people-title pb-2">
                {p.frontmatter.title}
              </h2>
              <p>
                <ReactMarkdown
                  children={p.frontmatter.description}
                  className="markdown text-xl"
                />
              </p>
              {/* <p>{p.content}</p> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
