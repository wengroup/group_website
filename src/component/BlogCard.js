import React from "react";
import { Card } from "@material-ui/core";
import { Avatar, CardContent, CardHeader, Typography } from "@material-ui/core";
import { Link } from "gatsby";

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);

  return color;
}

const BlogCard = ({ blog }) => {
  console.log(blog);
  return (
    <Link to={`/blogs/${blog.frontmatter.slug}`}>
      <Card style={{ backgroundColor: "rgb(241 245 249)" }}>
        <CardHeader
          avatar={
            <Avatar
              style={{
                backgroundColor: randomColor(),
              }}
            >
              <p className="indent-0">
                {blog.frontmatter.title[0].toUpperCase()}
              </p>
            </Avatar>
          }
          title={blog.frontmatter.title}
          subheader={blog.frontmatter.date}
        />
        <CardContent>
          <Typography variant="body2">
            {blog.frontmatter.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
export default BlogCard;
