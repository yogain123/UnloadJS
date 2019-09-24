function replaceAll(strMain, strToReplace, strToReplaceWith) {
  return strMain.split(strToReplace).join(strToReplaceWith);
}

module.exports = replaceAll;
