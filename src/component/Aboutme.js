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
    img: file(name: { eq: "hero" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }

    file(extension: { eq: "pdf" }) {
      publicURL
      relativePath
    }
  }
`;

export const Aboutme = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: about },
  } = data;

  return (
    <article id="about" className="sm:col-span-2 h-screen pt-16">
      {/* this is the about me div */}
      <div className="flex flex-col md:flex-row items-start md:gap-36  p-40 gap-32">
        {/* <h2 className="text-center"></h2> */}
        {/* there used to be an `About` text above; we've removed it */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className=" w-40 h-40 md:w-60 md:h-60 flex-shrink-0 ">
            <GatsbyImage
              image={data.img.childrenImageSharp[0].gatsbyImageData}
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
          <a
            className="inline-block px-7 py-2 bg-white border border-[#c0c6ca] rounded-full text-[#2b495b] font-semibold tracking-wide hover:bg-[#c0c6ca] hover:text-[#2b495b] transition mt-10"
            href={data.file.publicURL}
          >
            DOWNLOAD CV
          </a>
          {/* <ReactMarkdown children={about[0].about} className="markdown" /> */}
        </div>
      </div>
      {/* this is the publication div */}
      {/* <Publication /> */}
    </article>
  );
};
