import React from "react";
import { graphql } from "gatsby";
import Layout from "../../component/Layout";
import "../../css/blog.css";

const BlogTemplate = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data;
  const { html, frontmatter } = nodes[0];
  return (
    <Layout>
      <div className="w-full mb-16 px-8">
        <div className="flex flex-col mx-auto gap-3 max-w-4xl">
          <h2 className="text-center text-5xl">{frontmatter.title}</h2>
          <h1 className="text-right">{frontmatter.date}</h1>
          <hr />
          <ul>
            {frontmatter.stack &&
              frontmatter.stack.map((i, index) => {
                return (
                  <li key={index} className="stack mr-2">
                    {i}
                  </li>
                );
              })}
          </ul>
          {/* <h1 className="subTitle flex flex-row gap-6">{frontmatter.stack}</h1> */}
          <div className="markdown-body">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query getSingleBolg($frontmatter__slug: String) {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: $frontmatter__slug } } }
    ) {
      nodes {
        html
        id
        headings {
          depth
          value
        }
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          stack
        }
      }
    }
  }
`;
export default BlogTemplate;
