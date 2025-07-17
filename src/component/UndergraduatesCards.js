import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PeopleCardTest from "./PeopleCard";

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/people/master/.*/" } }
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
    allFile(filter: { relativeDirectory: { eq: "people/master/photo" } }) {
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
    allMarkdownRemark: { nodes: master },
    allFile: { nodes: photo },
  } = data;
  if (master.length)
    return (
      <div className="flex justify-center items-center">
        <div className=" w-3/4">
          <h2 className="text-center sm:text-left people-title sm:pl-11 ">
            M.S. Students
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5">
            {master.map((master) => {
              return (
                <div key={master.id}>
                  {/* <PeopleCard people={graduate} /> */}
                  <PeopleCardTest people={master} img={photo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  else return null;
};

export default UndergraduatesCards;
