'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs-promise');
var entities = require('./entities');

var IO = function () {
  function IO() {
    _classCallCheck(this, IO);
  }

  _createClass(IO, [{
    key: 'construtor',
    value: function construtor(entity) {
      this.entity = entity || 'components';
      this.entities = entities;
    }
  }, {
    key: 'validate',
    value: function validate() {
      return this.entities.validate();
    }
  }, {
    key: 'createJsonItem',


    // async
    value: function createJsonItem(id, ctx) {
      console.log('Create ' + this.entity + ' for ' + id + ' not yet supported...');
    }

    // async 

  }, {
    key: 'deleteJsonItem',
    value: function deleteJsonItem(id, ctx) {
      console.log('Delete ' + this.entity + ' for ' + id + ' not yet supported...');
    }

    // async 

  }, {
    key: 'updateJsonItem',
    value: function updateJsonItem(id, ctx) {
      this.createJsonItem(id, ctx);
    }
  }, {
    key: 'jsonItem',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', JSON.parse(this.file(id)));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function jsonItem(_x) {
        return _ref.apply(this, arguments);
      }

      return jsonItem;
    }()
  }, {
    key: 'jsonList',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', JSON.parse(this.list()));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function jsonList(_x2) {
        return _ref2.apply(this, arguments);
      }

      return jsonList;
    }()
  }, {
    key: 'fileName',
    value: function fileName(name) {
      // normalize file name to always have .json extension
      return !name.match(/\.json$/) ? name + '.json' : name;
    }
  }, {
    key: 'filePath',
    value: function filePath(name) {
      // return path.join(this.entityDir, this.fileName(name));
      return path.join(this.entityDir, name, 'item.json');
    }

    // return single .json file for that entity

  }, {
    key: 'file',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(name) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', fs.readFile(this.filePath(name), 'utf8'));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function file(_x3) {
        return _ref3.apply(this, arguments);
      }

      return file;
    }()
  }, {
    key: 'entityDir',
    get: function get() {
      return path.join(__dirname, this.entity);
    }
  }, {
    key: 'paths',
    get: function get() {
      return fs.readdir(dir);
    }
  }, {
    key: 'listFile',
    get: function get() {
      return path.join(this.entityDir, 'list.json');
    }
  }, {
    key: 'list',
    get: function get() {
      return fs.readFile(this.listFile, 'utf8');
    }

    // return list of json entries, one for each file of entity type

  }, {
    key: 'files',
    get: function get() {
      var _this = this;

      return Promise.all(this.paths.map(function (path) {
        var fileContent = fs.readFile(_this.filePath(path), 'utf8');
        return JSON.parse(fileContent);
      }));
    }
  }]);

  return IO;
}();

module.exports = {
  Io: Io,
  create: function create(entity) {
    return new Io(entity);
  }
};