'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var adapter = require('../adapter');

module.exports = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    var entity, id, io;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = ctx.accepts('json', 'html');
            _context.next = _context.t0 === 'json' ? 3 : _context.t0 === 'html' ? 4 : 5;
            break;

          case 3:
            return _context.abrupt('break', 6);

          case 4:
            return _context.abrupt('break', 6);

          case 5:
            ctx.throw(406, 'json or html only');

          case 6:
            entity = ctx.params.entity || 'components';
            id = ctx.params.id || 0;
            io = adapter.adapt(entity);


            if (!io.validate()) {
              ctx.throw(406, 'invalid artefact type: ' + entity);
            }

            ctx.type = 'json';
            io.create(id, ctx);
            ctx.body = 'created item: ' + id;
            ctx.status = 200; // OK

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function create(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return create;
}();