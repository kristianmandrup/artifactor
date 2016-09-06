'use strict';

module.exports = function (path) {
  var method = arguments.length <= 1 || arguments[1] === undefined ? 'GET' : arguments[1];

  return function get() {
    return agent(method, path).end().then(function (res) {
      return res;
    }, function (err) {
      //err.response has the response from the server
      throw 'Unable to retrieve list of apps';
    });
  };
};