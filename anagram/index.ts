function anagram(stringA: string, stringB: string): boolean {
  console.log(cleanString(stringA)); //aaefilrsty
  console.log(cleanString(stringB)); //aaefilrsty
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str: string): string {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagram;
