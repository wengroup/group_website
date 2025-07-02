import TurndownService from "turndown";

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

export function convertHtmlToArray(html) {
  const turndownService = new TurndownService();
  if (typeof document !== "undefined") {
    const container = document.createElement("div");
    container.innerHTML = html;

    const entries = container.querySelectorAll("h1, p");
    const result = [];
    let currentEntry = null;

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];

      if (entry.tagName === "H1") {
        if (currentEntry) result.push(currentEntry); // 保存之前的条目
        currentEntry = {
          id: generateUniqueId(),
          date: entry.textContent.trim(),
          content: "",
        };
      } else if (entry.tagName === "P") {
        const contentMarkdown = turndownService.turndown(entry.innerHTML);

        // 如果没有 currentEntry（即没有 H1 开头），则创建一个新条目
        if (!currentEntry) {
          currentEntry = {
            id: generateUniqueId(),
            content: contentMarkdown,
          };
        } else {
          // 如果已有 currentEntry，则追加内容
          currentEntry.content +=
            (currentEntry.content ? "\n\n" : "") + contentMarkdown;
        }
      }
    }

    if (currentEntry) result.push(currentEntry); // 保存最后一个条目
    return result;
  }
  return [];
}
