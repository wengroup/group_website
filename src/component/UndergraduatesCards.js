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
        <div className="flex items-center justify-center pt-9">
          <h2 className="text-center sm:text-left people-title w-2/3">
            Undergraduate Students
          </h2>
        </div>

        <div className="grid grid-cols-1 pt-3 gap-8">
          {undergraduates.map((undergraduate) => {
            return (
              <div
                key={undergraduate.id}
                className="flex items-center justify-center"
              >
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
