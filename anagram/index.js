function anagram(stringA, stringB) {
  console.log(cleanString(stringA)); //aaefilrsty
  console.log(cleanString(stringB)); //aaefilrsty
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagram;
