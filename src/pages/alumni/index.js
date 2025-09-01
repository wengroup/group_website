import React from "react";
import { Grid } from "@material-ui/core";
import BlogCard from "../../component/BlogCard";
import Layout from "../../component/Layout";
import { useStaticQuery, graphql } from "gatsby";
import PeopleCardTest from "../../component/PeopleCard";
const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/people/alumni/.*/" } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          Email
          date
          name
          photo
          description
        }
        id
      }
    }
    allFile(filter: { relativeDirectory: { eq: "people/alumni/photo" } }) {
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

const Alumni = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: alumni },
    allFile: { nodes: photo },
  } = data;

  if (alumni.length)
    return (
      <Layout>
        <div className="flex justify-center items-center">
          <div className=" w-3/4">
            <div className="flex items-center justify-center pt-9 mt-10">
              <h2 className="text-center  w-1/2 pb-10">Alumni</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5">
              {alumni.map((p) => {
                return (
                  <div key={p.id}>
                    {/* <PeopleCard people={graduate} /> */}
                    <PeopleCardTest people={p} img={photo} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  else return null;
};

export default Alumni;
