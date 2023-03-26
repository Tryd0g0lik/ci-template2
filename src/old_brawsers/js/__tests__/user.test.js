"use strict";

var _user = require("../user");
var _http = require("../http");
jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});
test('should call loadUser once', () => {
  _http.httpGet.mockReturnValue(JSON.stringify({}));
  const response = (0, _user.loadUser)(1);
  expect(response).toEqual({});
  expect(_http.httpGet).toBeCalledWith('http://server:8080/users/1');
});