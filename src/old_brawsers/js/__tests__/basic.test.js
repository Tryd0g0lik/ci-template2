"use strict";

var _basic = _interopRequireDefault(require("../basic"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
test('should sum', () => {
  const result = (0, _basic.default)([1, 2, 3]);
  expect(result).toBe(6);
});