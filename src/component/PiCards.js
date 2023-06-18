import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PeopleCardTest from "./PeopleCard";
const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/people/pi/.*/" } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        html
        frontmatter {
          Email
          name
          date
          photo
          description
          title
        }
        id
      }
    }
    allFile(filter: { relativeDirectory: { eq: "people/pi/photo" } }) {
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

const PiCards = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: PI },
    allFile: { nodes: photo },
  } = data;
  if (PI.length)
    return (
      <div>
        <h2 className="text-center sm:text-left people-title sm:pl-11 ">
          Principal Investigator
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5">
          {PI.map((p) => {
            return (
              <div key={p.id}>
                {/* <PeopleCard people={graduate} /> */}
                <PeopleCardTest people={p} img={photo} pi />
              </div>
            );
          })}
        </div>
      </div>
    );
  else return null;
};

export default PiCards;
