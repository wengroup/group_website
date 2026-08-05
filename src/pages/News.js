import React from "react";
import Layout from "../component/Layout";
import { graphql } from "gatsby";
import { New } from "../component/New";
import { convertNewsMarkdownToArray } from "../utils/convertNewsMarkdownToArray";

const News = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: news },
  } = data;
  const dataArray = convertNewsMarkdownToArray(news[0].rawMarkdownBody);
  return (
    <Layout>
      <New news={dataArray} showGrid />
    </Layout>
  );
};
export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/content_data/news.md" } }
    ) {
      nodes {
        id
        rawMarkdownBody
      }
    }
  }
`;
export default News;
