import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PeopleCardTest from "./PeopleCard";
const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content_data/people/undergraduates/.*/" }
      }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          Email
          name
          date
          photo
          description
        }
        id
      }
    }
    allFile(
      filter: { relativeDirectory: { eq: "people/undergraduates/photo" } }
    ) {
      nodes {
        relativePath
        extension
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const UndergraduatesCards = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: undergraduates },
    allFile: { nodes: photo },
  } = data;
  if (undergraduates.length)
    return (
      <div>
        <h2 className="text-center sm:text-left people-title sm:pl-11 ">
          Undergraduate Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5">
          {undergraduates.map((undergraduate) => {
            return (
              <div key={undergraduate.id}>
                {/* <PeopleCard people={graduate} /> */}
                <PeopleCardTest people={undergraduate} img={photo} />
              </div>
            );
          })}
        </div>
      </div>
    );
  else return null;
};

export default UndergraduatesCards;
