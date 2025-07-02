import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../component/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { convertHtmlToArray } from "../../utils/convertHtmlToArray";
const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/content_data/publications.md" } }
    ) {
      nodes {
        id
        html
      }
    }
  }
`;

const Publications = () => {
  const data = useStaticQuery(query);
  const {
    allMarkdownRemark: { nodes: publications },
  } = data;
  const dataArray = convertHtmlToArray(publications[0].html);

  if (dataArray.length)
    return (
      <Layout>
        <div className="flex justify-center items-center">
          <div className=" w-3/4">
            <div className="flex items-center justify-center pt-9 mt-10">
              <h2 className="text-center  people-title w-1/2 pb-10">
                Publications
              </h2>
            </div>

            <div className="flex justify-center items-center">
              {dataArray.map((item) => (
                <div>
                  <ReactMarkdown children={item.content} />
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
