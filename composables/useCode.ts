import { createHighlighter } from "shiki";

type Lang = "typescript" | "vue" | "zsh" | "json";

export async function highlightCode(
  code: string,
  lang: Lang,
  theme: string = "dracula"
): Promise<string> {
  const highlighter = await createHighlighter({
    themes: [theme],
    langs: ["typescript", "vue", "zsh", "json"],
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme,
  });
}
