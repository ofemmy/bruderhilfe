export function extractParagraph(content) {
  return content?.map((item) => item[0].text);
}
