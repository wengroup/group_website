import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ResearchCard = ({ item, imgs }) => {
  return (
    <div key={item.id} className="pb-6 flex w-full gap-9">
      <div className=" w-1/3 items-center flex">
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
      <div className="w-2/3">
        <p className="pb-4 text-base font-semibold" id={item.frontmatter.title}>
          {item.frontmatter.title}
        </p>

        <p className="pb-4">
          <div dangerouslySetInnerHTML={{ __html: item.html }} />
        </p>
      </div>

      <hr />
    </div>
  );
};

export default ResearchCard;
