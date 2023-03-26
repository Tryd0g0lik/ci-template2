"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;
function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}