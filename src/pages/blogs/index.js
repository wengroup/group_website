import React from "react";
import BlogCard from "../../component/BlogCard";
import Layout from "../../component/Layout";
import { graphql } from "gatsby";

const Blogs = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: blogs },
  } = data;
  return (
    <Layout>
      <h2 className="text-center mb-20 pt-20">Blogs</h2>
      <div className="px-6 pb-24 sm:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            return <BlogCard blog={blog} key={blog.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/content_data/blogs/.*/" } }
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
          description
        }
      }
    }
  }
`;
export default Blogs;
