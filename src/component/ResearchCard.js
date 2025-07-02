import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ResearchCard = ({ item, imgs }) => {
  return (
    <div key={item.id} className="pb-6 w-full ">
      <p className="subTitle pb-4" id={item.frontmatter.title}>
        {item.frontmatter.title}
      </p>

      <p className="pb-4 text-lg">
        <div dangerouslySetInnerHTML={{ __html: item.html }} />
      </p>
      <div className="">
        {imgs.map((p) => {
          if (p.relativePath === item.frontmatter.img) {
            return (
              // <GatsbyImage
              //   image={p.childImageSharp.gatsbyImageData}
              //   alt={item.frontmatter.title}
              //   className="w-1/2 mb-4"
              // />
              <img src={p.publicURL} className=" w-1/2 mb-4 mx-auto"></img>
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
