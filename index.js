let method = {};

method.hashPass = require("./hash-pass"); // hash your password
method.anagram = require("./anagram"); // check your strings are anagram or not
method.clone = require("./clone");
method.charMap = require("./charmap");
method.sort = require("./sort");

module.exports = method;
