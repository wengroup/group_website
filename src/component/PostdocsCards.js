import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PeopleCardTest from "./PeopleCard";
const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content_data/people/postdocs/.*/" }
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
    allFile(filter: { relativeDirectory: { eq: "people/postdocs/photo" } }) {
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

const PostdocsCards = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: postdoc },
    allFile: { nodes: photo },
  } = data;
  if (postdoc.length)
    return (
      <div>
        <div className="flex items-center justify-center pt-9">
          <h2 className="text-center sm:text-left people-title w-2/3">
            Postdocs
          </h2>
        </div>

        <div className="grid grid-cols-1 pt-3 gap-8">
          {postdoc.map((p) => {
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

export default PostdocsCards;
