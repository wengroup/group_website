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
        if (currentEntry) {
          result.push(currentEntry);
        }
        currentEntry = {
          id: generateUniqueId(),
          date: entry.textContent.trim(),
        };
      } else if (entry.tagName === "P") {
        const contentHtml = entry.innerHTML;
        const contentMarkdown = turndownService.turndown(contentHtml);
        currentEntry.content = contentMarkdown;
      }
    }

    if (currentEntry) {
      result.push(currentEntry);
    }

    return result;
  }
}
