// The File System Route at `src/pages/blogs/{MarkdownRemark.frontmatter__slug}.js`
// matches every MarkdownRemark node, including content outside `content_data/blogs`
// (news, about, research, ...). Those nodes have no `frontmatter.slug`, so they all
// collapse into a single `/blogs/null/` page. Drop it.
exports.onCreatePage = ({ page, actions }) => {
  if (page.path === "/blogs/null/") {
    actions.deletePage(page);
  }
};
