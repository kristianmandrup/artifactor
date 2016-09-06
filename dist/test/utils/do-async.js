"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (fn) {
    return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(done) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return fn();

                        case 3:
                            done();
                            _context.next = 9;
                            break;

                        case 6:
                            _context.prev = 6;
                            _context.t0 = _context["catch"](0);

                            done(_context.t0);

                        case 9:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 6]]);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};