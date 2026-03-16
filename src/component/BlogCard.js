import React, { useState, useEffect } from "react";
import { Card, Avatar, CardContent, CardHeader, Typography } from "@mui/material";
import { Link } from "gatsby";

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16).padStart(6, '0');

  return color;
}

const BlogCard = ({ blog }) => {
  const [avatarColor, setAvatarColor] = useState("grey");

  useEffect(() => {
    setAvatarColor(randomColor());
  }, []);

  return (
    <Link to={`/blogs/${blog.frontmatter.slug}`}>
      <Card style={{ backgroundColor: "rgb(241 245 249)" }}>
        <CardHeader
          avatar={
            <Avatar
              style={{
                backgroundColor: avatarColor,
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
