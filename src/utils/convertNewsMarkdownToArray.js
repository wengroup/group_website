/**
 * Convert the local news Markdown into dated entries for display.
 *
 * Each entry starts at a top-level (`# `) heading holding the date. Headings
 * inside fenced code blocks are ignored so that a shell comment such as
 * `# install` does not start a new entry.
 */
export function convertNewsMarkdownToArray(markdown) {
  const entries = [];
  let insideFence = false;

  for (const line of markdown.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      insideFence = !insideFence;
    }

    const heading = insideFence ? null : line.match(/^# (.*)$/);

    if (heading) {
      entries.push({
        id: `news-item-${entries.length}`,
        date: heading[1].trim(),
        content: [],
      });
      continue;
    }

    if (!entries.length) {
      // Content before the first heading becomes a dateless entry.
      if (!line.trim()) continue;
      entries.push({ id: "news-item-0", date: "", content: [] });
    }

    entries[entries.length - 1].content.push(line);
  }

  return entries.map((entry) => ({
    ...entry,
    content: entry.content.join("\n").trim(),
  }));
}
