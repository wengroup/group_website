import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Publication } from "./Publication";
import { GatsbyImage } from "gatsby-plugin-image";
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
    file(name: { eq: "hero" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
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
      <div className="flex flex-col md:flex-row items-start md:gap-48 max-w-4xl mx-auto p-6 gap-32">
        {/* <h2 className="text-center"></h2> */}
        {/* there used to be an `About` text above; we've removed it */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className=" w-40 h-40 md:w-60 md:h-60 flex-shrink-0 ">
            <GatsbyImage
              image={data.file.childrenImageSharp[0].gatsbyImageData}
              alt="wengroup"
              className=" rounded-full overflow-hidden w-full h-full object-cover border-4 border-gray-100 shadow-md"
            />

            <div className="flex gap-3 justify-center -mt-9">
              {/* <div className="flex gap-4 -mt-2"> */}
              <Publication />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p>
            <div dangerouslySetInnerHTML={{ __html: about[0].html }} />
          </p>

          {/* <ReactMarkdown children={about[0].about} className="markdown" /> */}
        </div>
      </div>
      {/* this is the publication div */}
      {/* <Publication /> */}
    </article>
  );
};
