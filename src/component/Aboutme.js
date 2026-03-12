import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Publication } from "./Publication";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect, useState } from "react";

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
    headshot: file(name: { eq: "hero" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }

    hero: file(name: { eq: "siguniang" }) {
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
  const [zoomed, setZoomed] = useState(false);

  const {
    allMarkdownRemark: { nodes: about },
  } = data;
  useEffect(() => {
    setZoomed(true); // 组件加载后触发放大效果
  }, []);

  return (
    <div className="w-full ">
      {/* 背景图片 - 调整了移动端的显示方式 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <GatsbyImage
          image={data.hero.childrenImageSharp[0].gatsbyImageData}
          alt="wengroup"
          className="object-cover w-full h-full opacity-50 block mx-auto"
        />
      </div>

      <article
        id="about"
        className="h-screen relative flex items-center px-4 
                  md:ml-72 md:px-36  "
      >
        <div
          className="flex flex-col md:flex-row gap-5 md:gap-36 py-8  w-full
                      mx-auto max-w-screen-xl "
        >
          {" "}
          <div className=" text-base md:text-xl mt-0 md:-mt-28 px-4 md:px-0 ">
            <div
              className="about leading-relaxed md:leading-loose"
              dangerouslySetInnerHTML={{ __html: about[0].html }}
            />
          </div>
        </div>
      </article>
    </div>
  );
};
