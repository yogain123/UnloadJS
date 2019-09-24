function replaceAll(
  strMain: string,
  strToReplace: string,
  strToReplaceWith: string
): string {
  return strMain.split(strToReplace).join(strToReplaceWith);
}

module.exports = replaceAll;
