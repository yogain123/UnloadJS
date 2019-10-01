function mapToObject(myMap: Map<any, any>) {
  let obj: any = {};
  for (const [key, value] of myMap.entries()) {
    obj[key] = value;
  }
  return obj;
}
module.exports = mapToObject;
