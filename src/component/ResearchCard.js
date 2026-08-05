import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ResearchCard = ({ item, imgs }) => {
  return (
    <div key={item.id} className="pb-6 w-full ">
      <p className="subTitle pb-4" id={item.frontmatter.title}>
        {item.frontmatter.title}
      </p>

      <div className="pb-4 text-lg">
        <div dangerouslySetInnerHTML={{ __html: item.html }} />
      </div>
      <div className="flex justify-center">
        {imgs.map((p) => {
          if (p.relativePath === item.frontmatter.img) {
            return (
              <GatsbyImage
                image={p.childImageSharp.gatsbyImageData}
                alt={item.frontmatter.title}
                className="w-2/3 mb-4 mx-auto"
                loading="lazy"
                key={p.relativePath}
              />
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
