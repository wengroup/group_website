import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../component/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { convertMarkdownToPublications } from "../../utils/convertMDToArray";
const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/content_data/publications.md" } }
    ) {
      nodes {
        id
        html
        rawMarkdownBody
      }
    }
    allFile(
      filter: {
        extension: { eq: "pdf" }
        relativeDirectory: { eq: "publications" }
      }
    ) {
      edges {
        node {
          name
          relativePath
          publicURL
        }
      }
    }
  }
`;

const Publications = () => {
  const data = useStaticQuery(query);
  const {
    allFile: { edges: path },
    allMarkdownRemark: { nodes: publications },
  } = data;
  const dataArray = convertMarkdownToPublications(
    publications[0].rawMarkdownBody
  );

  if (dataArray.length)
    return (
      <Layout>
        <div className="flex justify-center items-center">
          <div className=" w-1/2">
            <div className="flex items-center justify-center pt-9 mt-10">
              <h2 className="text-center  people-title w-1/2 pb-10">
                Publications
              </h2>
            </div>

            <div className="flex  flex-col ">
              {dataArray.map((item) => (
                <div className="flex text-left text-lg">
                  <p>{item.id}.&nbsp;</p>

                  <a
                    href={
                      path.find((a) => a.node.relativePath == item.path).node
                        .publicURL
                    }
                    target="_blank"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  else return null;
};

export default Publications;
