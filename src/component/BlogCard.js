import React from "react";
import { Link } from "gatsby";

function colorFromTitle(title) {
  const hue = [...title].reduce((total, character) => {
    return (total + character.charCodeAt(0) * 17) % 360;
  }, 0);

  return `hsl(${hue} 45% 45%)`;
}

const BlogCard = ({ blog }) => {
  const { date, description, title } = blog.frontmatter;

  return (
    <Link
      to={`/blogs/${blog.frontmatter.slug}`}
      className="block h-full rounded-lg bg-slate-100 p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: colorFromTitle(title) }}
          aria-hidden="true"
        >
          {title[0].toUpperCase()}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700">{description}</p>
    </Link>
  );
};
export default BlogCard;
