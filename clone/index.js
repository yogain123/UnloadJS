function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

module.exports = clone;
