import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../component/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { convertMarkdownToPublications } from "../../utils/convertMDToArray";
const query = graphql`
  {
    allReference(sort: { fields: year, order: DESC }) {
      edges {
        node {
          key
          title
          journal
          file {
            id
            publicURL
            relativePath
          }
          year
          doi
          author
          id
          publisher
          volume
          pages
        }
      }
    }
  }
`;

const Publications = () => {
  const data = useStaticQuery(query);
  const {
    allReference: { edges: papers },
  } = data;

  if (papers.length)
    return (
      <Layout>
        <div className="flex justify-center items-center">
          <div className=" w-3/5">
            <div className="flex items-center justify-center pt-24 mt-10">
              <h2 className="text-center  people-title w-1/2 pb-10">
                Publications
              </h2>
            </div>

            <ol
              className=" pl-6"
              style={{
                fontFamily: "Arial, sans-serif",
                listStyle: "none",
                counterReset: "item " + (papers.length + 1),
              }}
            >
              {papers.map((item, idx) => {
                const number = papers.length - idx; // 使用 map 的 index，简单可靠
                return (
                  <li
                    key={item.node.id}
                    className="mb-4 text-left text-lg relative"
                    style={{
                      counterIncrement: "item -1",
                    }}
                  >
                    <span className="absolute -left-6 inline-block text-right w-11">
                      {number}.
                    </span>
                    <div className="ml-7">
                      <a
                        href={item.node.file?.publicURL || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="paper-link hover:underline font-medium"
                      >
                        {item.node.title}
                      </a>
                      <span className="text-gray-700">
                        . {item.node.author}.{" "}
                      </span>
                      <span className="italic font-semibold">
                        {item.node.journal}
                      </span>
                      {item.node.volume && (
                        <span className="text-gray-700">
                          , {item.node.volume}
                        </span>
                      )}
                      {item.node.pages && (
                        <span className="text-gray-700">
                          , {item.node.pages}
                        </span>
                      )}
                      {item.node.year && (
                        <span className="text-gray-700">
                          , {item.node.year}.
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Layout>
    );
  else return null;
};

export default Publications;
