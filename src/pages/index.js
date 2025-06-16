import React from "react";
import Layout from "../component/Layout";
import { New } from "../component/New";
import { Code } from "../component/Code";
import { Aboutme } from "../component/Aboutme";
import { Research } from "../component/Research";
import { graphql } from "gatsby";
import PeopleCards from "../component/PeopleCards";
import Seo from "../component/SEO";
import { Position } from "../component/Position";
import { convertHtmlToArray } from "../utils/convertHtmlToArray";
import { Publication } from "../component/Publication";

const Home = ({ data }) => {
  // const {
  //   allStrapiCodes: { nodes: codes },
  //   allStrapiResearchWorks: { nodes: researches },
  //   allMarkdownRemark: { nodes: news },
  //   allStrapiGraduates: { nodes: graduates },
  //   allStrapiPi: { nodes: pi },
  //   allStrapiPositions: { nodes: positions },
  // } = data
  const researchData = data.researchData.nodes;
  const newsData = data.newsData.nodes;
  const codeData = data.codeData.nodes;
  const positionData = data.positionData.nodes;
  const newsArray = convertHtmlToArray(newsData[0].html);
  return (
    <Layout>
      <Seo />
      <div className="">
        <Aboutme />
        <New news={newsArray} />
      </div>
      <PeopleCards />
      <Research researches={researchData} />
      {/* <Research researches={researches} showLink /> */}
      <Code codes={codeData} />
      <Position positions={positionData} />
      <Publication />
    </Layout>
  );
};
export const query = graphql`
  {
    newsData: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/content_data/news.md" } }
    ) {
      nodes {
        id
        html
      }
    }
    codeData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/codes/.*/" } }
      sort: { fields: fileAbsolutePath, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          title
          github
          document
          description
        }
      }
    }
    researchData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/research/.*/" } }
      sort: { fields: fileAbsolutePath, order: ASC }
    ) {
      nodes {
        frontmatter {
          img
          title
        }
        html
        id
      }
    }
    positionData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/position/.*/" } }
      sort: { fields: fileAbsolutePath, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
        }
      }
    }
  }
`;

export default Home;
