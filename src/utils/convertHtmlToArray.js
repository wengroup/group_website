import TurndownService from "turndown";
import { parse } from "node-html-parser";

function generateUniqueId(index) {
  // Use index to make it deterministic for hydration
  return `news-item-${index}`;
}

export function convertHtmlToArray(html) {
  const turndownService = new TurndownService();
  const root = parse(html);

  const entries = root.querySelectorAll("h1, p");
  const result = [];
  let currentEntry = null;

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];

    if (entry.tagName === "H1") {
      if (currentEntry) result.push(currentEntry);
      currentEntry = {
        id: generateUniqueId(result.length),
        date: entry.textContent.trim(),
        content: "",
      };
    } else if (entry.tagName === "P") {
      const contentMarkdown = turndownService.turndown(entry.innerHTML);

      if (!currentEntry) {
        currentEntry = {
          id: generateUniqueId(result.length),
          content: contentMarkdown,
        };
      } else {
        currentEntry.content +=
          (currentEntry.content ? "\n\n" : "") + contentMarkdown;
      }
    }
  }

  if (currentEntry) result.push(currentEntry);
  return result;
}
