import React from "react";
import { Grid } from "@material-ui/core";
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
      <div className="px-20">
        <Grid
          container
          spacing={2}
          alignItems="baseline"
          style={{ padding: "2rem", paddingBottom: "6rem" }}
        >
          {blogs.map((blog) => {
            return (
              <Grid item key={blog.id} sm={4}>
                <BlogCard blog={blog} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
};
export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
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
