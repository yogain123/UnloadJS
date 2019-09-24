function sort(data, order = 1) {
  if (Object.prototype.toString.call(data) == "object Array") {
    if (order === 1) {
      return data.sort((a, b) => a - b);
    } else if (order === -1) {
      return data.sort((a, b) => b - a);
    }
  }

  if (Object.prototype.toString.call(data) == "object String") {
    if (order === 1) {
      return data
        .split("")
        .sort((a, b) => a - b)
        .join("");
    } else if (order === -1) {
      return data
        .split("")
        .sort((a, b) => b - a)
        .join("");
    }
  }
}

module.exports = sort;
