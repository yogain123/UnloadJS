function surreal(data: any) {
  if (Object.prototype.toString.call(data) === "[object Array]") {
    return "array";
  }
  if (Object.prototype.toString.call(data) === "[object Object]") {
    return "object";
  }
  if (Object.prototype.toString.call(data) === "[object Promise]") {
    return "promise";
  }
  if (Object.prototype.toString.call(data) === "[object Function]") {
    return "function";
  }
  if (Object.prototype.toString.call(data) === "[object Boolean]") {
    return "boolean";
  }
  if (Object.prototype.toString.call(data) === "[object Number]") {
    return "number";
  }
  if (Object.prototype.toString.call(data) === "[object String]") {
    return "string";
  }
  if (Object.prototype.toString.call(data) === "[object Symbol]") {
    return "symbol";
  }
}

module.exports = surreal;
