'use strict';

var rating = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', _.callApi(route + '/rate', 'POST', data));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function rating(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _ = require('../../utils');
var data = require('../requests/rating');
var expectations = require('./expectations');

// to use expect:
// _.expect()
var route = '/addons/sigma-ui';

describe('addons', function () {
  describe('POST addon rating', function () {
    it('should add a rating to the addon', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return rating(data);

            case 2:
              result = _context2.sent;

              expectations.ratingAdded(result);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }))));

    it('should NOT add a second rating to the app for the same user', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return rating(data);

            case 2:
              result = _context3.sent;

              expectations.duplicateUserRatingNotAdded(result);

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }))));
  });
});