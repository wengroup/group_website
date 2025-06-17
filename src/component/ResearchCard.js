import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ResearchCard = ({ item, imgs }) => {
  return (
    <div
      key={item.id}
      className="pb-6 flex w-full gap-9 sm:flex-row flex-col items-center justify-center "
    >
      <div className="sm:w-2/3 w-full flex flex-col items-center justify-center sm:items-start">
        <p className="pb-4 text-base font-semibold" id={item.frontmatter.title}>
          {item.frontmatter.title}
        </p>

        <p className="pb-4 px-10 sm:px-0">
          <div dangerouslySetInnerHTML={{ __html: item.html }} />
        </p>
      </div>
      <div className=" sm:w-1/2 items-center flex w-3/4 justify-center ">
        {imgs.map((p) => {
          if (p.relativePath === item.frontmatter.img) {
            return (
              // <GatsbyImage
              //   image={p.childImageSharp.gatsbyImageData}
              //   alt={item.frontmatter.title}
              //   className="w-1/2 mb-4"
              // />
              <img src={p.publicURL} className=" w-full "></img>
            );
          } else {
            return null;
          }
        })}
      </div>

      <hr />
    </div>
  );
};

export default ResearchCard;
