'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Usage:
//  createRouter('components')

module.exports = function () {
  function RouterFactory(entity) {
    _classCallCheck(this, RouterFactory);

    this.entity = entity;
  }

  _createClass(RouterFactory, [{
    key: 'createRouter',
    value: function createRouter(entity) {
      var router = new Router({
        prefix: '/' + entity
      });

      router.get('list', '/', this.list).get('item', '/:id', this.item).get('version', '/:id/version', this.version).post('create', '/:id', this.create).post('rate', '/:id/rate', this.rate).put('update', '/:id', this.update).del('delete', '/:id', this.remove);

      return router;
    }
  }, {
    key: 'create',
    get: function get() {
      return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ctx.body = 'POST/create ' + entity + ' is not yet supported!';

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
    }
  }, {
    key: 'rate',
    get: function get() {
      return function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  ctx.body = 'POST/create ' + entity + ' is not yet supported!';

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }();
    }
  }, {
    key: 'remove',
    get: function get() {
      return function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  ctx.body = 'DELETE ' + entity + ' is not yet supported!';

                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }();
    }
  }, {
    key: 'update',
    get: function get() {
      return function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  ctx.body = 'PUT/update ' + entity + ' is not yet supported!';

                case 1:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }();
    }
  }, {
    key: 'list',
    get: function get() {
      return function () {
        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(ctx, next) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  ctx.body = 'GET/list ' + entity + ' is not yet supported!';

                case 1:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }();
    }
  }, {
    key: 'item',
    get: function get() {
      return function () {
        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(ctx, next) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  ctx.body = 'GET/list ' + entity + ' is not yet supported!';

                case 1:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }();
    }
  }, {
    key: 'version',
    get: function get() {
      var _this = this;

      return function () {
        var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(ctx, next) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  ctx.body = 'GET/list ' + entity + ' is not yet supported!';

                case 1:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this);
        }));

        return function (_x13, _x14) {
          return _ref7.apply(this, arguments);
        };
      }();
    }
  }]);

  return RouterFactory;
}();