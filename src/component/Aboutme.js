import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Publication } from "./Publication";
const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/content_data/about.md" } }
    ) {
      nodes {
        id
        html
      }
    }
  }
`;

export const Aboutme = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: about },
  } = data;

  return (
    <article id="about" className="sm:col-span-2 pt-16">
      {/* this is the about me div */}
      <div>
        <h2 className="text-center"></h2>  /*there used to be an `About` text; we've removed it*/
        <div className="flex flex-row justify-center mb-10"></div>
        <p>
          <div dangerouslySetInnerHTML={{ __html: about[0].html }} />
          {/* <ReactMarkdown children={about[0].about} className="markdown" /> */}
        </p>
      </div>
      {/* this is the publication div */}
      <Publication />
    </article>
  );
};
