function sort(data: number[] | string, order = 1) {
  if (
    Object.prototype.toString.call(data) == "[object Array]" &&
    typeof data === "object"
  ) {
    if (order === 1) {
      return data.sort((a, b) => a - b);
    } else if (order === -1) {
      return data.sort((a, b) => b - a);
    }
  }

  if (
    Object.prototype.toString.call(data) == "[object String]" &&
    typeof data === "string"
  ) {
    if (order === 1) {
      return data
        .split("")
        .sort((a: any, b: any) => a - b)
        .join("");
    } else if (order === -1) {
      return data
        .split("")
        .sort((a: any, b: any) => b - a)
        .join("");
    }
  }
}

module.exports = sort;
