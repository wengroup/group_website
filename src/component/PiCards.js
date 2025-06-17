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
      <div className="flex flex-col">
        <div className="flex items-center justify-center pb-10">
          <h2 className="text-center sm:text-left people-title w-1/2">
            Principal Investigator
          </h2>
        </div>

        <div className="">
          {PI.map((p) => {
            return (
              <div key={p.id} className="flex items-center justify-center ">
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
