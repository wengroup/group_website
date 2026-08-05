import React from "react";
import ReactMarkdown from "react-markdown";

export const Position = ({ positions }) => {
  return (
    <div id="openings" className="">
      <h2 className=" text-center pt-20 pb-20">Openings</h2>
      <ul className="sm:w-128 flex mx-auto w-5/6 flex-col">
        {positions.map((p) => {
          return (
            <li key={p.id} className=" mb-14">
              <h2 className="text-center sm:text-left people-title pb-2">
                {p.frontmatter.title}
              </h2>
              <div className="markdown opening-description text-xl">
                <ReactMarkdown>{p.frontmatter.description}</ReactMarkdown>
              </div>
              {/* <p>{p.content}</p> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
