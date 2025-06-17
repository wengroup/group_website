import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { useStaticQuery, graphql } from "gatsby";
const query = graphql`
  {
    file(extension: { eq: "pdf" }) {
      publicURL
      relativePath
    }
  }
`;
const PeopleCardTest = ({ people, img, pi }) => {
  const { frontmatter } = people;
  // console.log(img)
  // console.log(description)
  const data = useStaticQuery(query);
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row sm:w-1/2 w-4/5 items-center">
        <div className="sm:mx-0  sm:pb-0  flex  ">
          {img.map((p) => {
            if (p.relativePath === frontmatter.photo) {
              return (
                <GatsbyImage
                  image={p.childImageSharp.gatsbyImageData}
                  alt={frontmatter.name}
                  className="h-24 w-24 sm:mr-4 headshot "
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="flex flex-col  ">
          <div className="text-sm text-center sm:text-left">
            <p className="text-base font-semibold ">{frontmatter.name}</p>
            {pi && <p className="w-max text-slate-500">{frontmatter.title}</p>}
            {/* <p className="w-max">{title}</p> */}
            <p className="text-slate-500 font-mono ">{frontmatter.Email}</p>
            {/* <p>{website}</p> */}

            {pi && (
              <p className="markdown">
                <a href={data.file.publicURL} target="_blank">
                  CV
                </a>
              </p>
            )}
          </div>
          <p className="text-sm mt-2">
            <ReactMarkdown
              children={frontmatter.description}
              className="markdown"
            />
          </p>
        </div>
      </div>
    </>
  );
};
export default PeopleCardTest;
