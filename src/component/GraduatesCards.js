import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PeopleCardTest from "./PeopleCard";
const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content_data/people/graduates/.*/" }
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
    allFile(filter: { relativeDirectory: { eq: "people/graduates/photo" } }) {
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

const GraduatesCards = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: graduates },
    allFile: { nodes: photo },
  } = data;
  if (graduates.length)
    return (
      <div>
        <div className="flex items-center justify-center pt-9">
          <h2 className="text-center sm:text-left people-title w-2/3 ">
            Graduate Students
          </h2>
        </div>

        <div className="grid grid-cols-1 pt-3 gap-8">
          {graduates.map((p) => {
            return (
              <div key={p.id} className="flex items-center justify-center">
                {/* <PeopleCard people={graduate} /> */}
                <PeopleCardTest people={p} img={photo} />
              </div>
            );
          })}
        </div>
      </div>
    );
  else return null;
};

export default GraduatesCards;
