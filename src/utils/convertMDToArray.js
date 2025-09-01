export function convertMarkdownToPublications(markdown) {
  const regex = /^\d+\.\s+\[([^\]]+)\]\(([^)]+)\)/gm;
  const result = [];
  let match;

  while ((match = regex.exec(markdown)) !== null) {
    result.push({
      id: match[0].split(".")[0], // 提取列表项的数字ID
      title: match[1].trim(), // 提取链接文本
      path: match[2].trim(), // 提取链接路径
    });
  }

  return result;
}
