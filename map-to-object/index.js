function mapToObject(myMap) {
  let obj = {};
  for (const [key, value] of myMap.entries()) {
    obj[key] = value;
  }
  return obj;
}
module.exports = mapToObject;
