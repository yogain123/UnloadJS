function charMap(str: string) {
  const charMap: any = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = (charMap[char] as string) + 1 || 1;
  }
  return charMap;
}

module.exports = charMap;
