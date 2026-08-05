import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ResearchCard from "./ResearchCard";

// `sizes` mirrors how ResearchCard lays the image out (`w-2/3` of the page
// container). Keep the two in sync: if the card width changes, recompute this
// or the browser will pick the wrong candidate from the srcset.
const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "research/img" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            width: 1500
            quality: 90
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            sizes: "(min-width: 1280px) 608px, (min-width: 640px) calc(53.33vw - 75px), calc(66.67vw - 75px)"
          )
        }
      }
    }
  }
`;

export const Research = ({ researches, showLink }) => {
  const data = useStaticQuery(query);
  const {
    allFile: { nodes: imgs },
  } = data;
  return (
    <article
      id="research"
      className={`${
        showLink
          ? "px-14 sm:w-4/5 mx-auto max-w-5xl sm:pt-20"
          : "px-14 sm:w-4/5 mx-auto max-w-5xl sm:pt-20"
      }`}
    >
      <h2 className="text-center pb-20">
        {showLink ? <Link to="Researches">Research</Link> : "Research"}
      </h2>
      <ul className="grid gap-20">
        {researches.map((item) => {
          return <ResearchCard item={item} key={item.id} imgs={imgs} />;
        })}
      </ul>
    </article>
  );
};
