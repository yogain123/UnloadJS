let methods = {};

methods.hashPass = require("./hash-pass"); // hash your password
methods.anagram = require("./anagram"); // check your strings are anagram or not
methods.clone = require("./clone");
methods.charMap = require("./charmap");
methods.sort = require("./sort");
methods.log = require("./log");
methods.replaceAll = require("./replace");

console.log(methods.replaceAll("ydgendra", "d", "**"));

module.exports = methods;
