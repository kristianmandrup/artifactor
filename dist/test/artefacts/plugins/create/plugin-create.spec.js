'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _ = require('../../utils');
var expectations = require('./expectations');
var data = require('../requests/i18n/create');

// to use expect:
// _.expect()
var route = require('../route');

describe('plugins', function () {
  describe('POST item', function () {
    it('should create a single plugin', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.callApi(route, 'POST', data);

            case 2:
              result = _context.sent;

              expectations(result);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }))));
  });
});