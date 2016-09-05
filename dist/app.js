'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entities = function () {
  function Entities() {
    _classCallCheck(this, Entities);
  }

  _createClass(Entities, [{
    key: 'validate',
    value: function validate() {
      return this.list.indexOf(this.entity) ? true : false;
    }
  }, {
    key: 'names',
    get: function get() {
      return ['app', 'component', 'plugin', 'lib'];
    }
  }, {
    key: 'list',
    get: function get() {
      return ['apps', 'components', 'plugins', 'libs'];
    }
  }]);

  return Entities;
}();

module.exports = new Entities();
'use strict';

module.exports = {
  entities: require('./entities'),
  io: require('./io')
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs-promise');
var entities = require('./entities');

module.exports = function () {
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
'use strict';

function noSuchVersion(number) {
  console.error('No such version', number);
}

module.exports = function decorate(schema, modelName) {
  var _this = this;

  schema.query.findByName = function (name) {
    return _this.find({
      name: new RegExp(name, 'i')
    });
  };

  // See: http://mongoosejs.com/docs/subdocs.html

  schema.methods.latestVersion = function (name) {
    return _this.versions.sort({ number: -1 }).exec()[0];
  };

  schema.methods.addVersion = function (version) {
    return _this.versions.push(version);
  };

  schema.methods.removeVersion = function (id) {
    return _this.versions.id(id).remove();
  };

  schema.methods.rateVersion = function (number, rating) {
    var version = _this.versions.id(number);
    return version ? version.ratings.push(rating) : noSuchVersion(number);
  };

  schema.methods.rateLatest = function (rating) {
    _this.latestVersion().then(function (version) {
      return version.ratings.push(rating);
    }).catch(function (err) {
      console.error('rateLatest', err);
    });
  };
};
'use strict';

// getting-started.js
var mongoose = require('mongoose');
var dbName = 'artifactor';

mongoose.connect('mongodb://localhost/' + dbName);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Mongo DB connection is open :)');
});
'use strict';

var mongoose = require('mongoose');
var schemas = require('./schemas');
var entities = require('../artefacts/entities');
var _ = require('lodash');

// decorator adds useful instance and static methods to model
// esp. to better manage versions and ratings! 
var decorator = require('./decorator');

// iterate over all supported artefact entities
// create a models map using schemas map
module.exports = entities.names.reduce(function (models, name) {
  var clazzName = _.capitalize(name);
  var mdl = mongoose.model(clazzName, schemas[name]);

  models[clazzName] = decorate(mdl);
  return models;
}, {});
'use strict';

// The Addon is similar to component, app etc. except it is NOT linked to a repo,
// so a version has no repo location

var artefact = require('./artefact-schema');

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
var schemaObj = Object.assign(artefact.schemaObj, {});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
'use strict';

var component = require('./component-schema');

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
var schemaObj = Object.assign(component.schemaObj, {});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _require = require('./common');

var Author = _require.Author;

// allows easy extension

var schemaObj = {
  name: String,
  description: String,
  date: Date,
  version: String,
  rating: Float,
  author: Author,
  type: [String],
  keywords: [String],
  categories: [String]
};

module.exports = {
  schemaObj: schemaObj
};
"use strict";

module.exports = new Schema({
  name: { type: String, required: false },
  alias: { type: String, index: true },
  email: String,
  organisation: String,
  profile: String
});
'use strict';

modules.export = {
  Author: require('./author'),
  InstallConfig: require('./install-config')
};
"use strict";

var ComponentDep = new Schema({
  name: String,
  version: String
});

var Dependencies = new Schema({
  components: [ComponentDep],
  libs: [String]
});

modules.export = new Schema({
  bundles: [String],
  dependencies: Dependencies
});
'use strict';

// From: http://stackoverflow.com/questions/25449570/mongoose-default-sorting-order

module.exports = function (query, fields, options) {
    //First 3 parameters are optional
    if (arguments.length === 1) {
        cb = query;
    } else if (arguments.length === 2) {
        cb = fields;
    } else if (arguments.length === 3) {
        cb = options;
    }

    return this.find(query, fields, options).sort('-createdAt').exec(cb);
};
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var defaults = {
  status: { type: String, default: 'stable' },
  rating: { type: Number, default: 3 },
  date: { type: Date, default: Date.now, required: true },
  installations: { type: Number, default: 0, required: true }
};

var UiFramework = new Schema({
  name: String,
  status: defaults.status
});

var Rating = new Schema({
  rating: { type: Number, default: 3 },
  comment: String,
  username: String
});

var schemaObj = {
  number: { type: String, required: true }, // version number such as 1.3
  date: defaults.date,
  author: Author,
  notice: String,
  status: defaults.status,
  installations: defaults.installations,
  rating: defaults.rating,
  ratings: [Rating],
  ui: [UiFramework],
  install: InstallConfig
};

var schema = new Schema(schemaObj);

module.exports = {
  schemaObj: schemaObj
};
'use strict';

modules.export = {
  Version: require('./version')
};
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var versionObj = require('../common/version').schemaObj;

var schemaObj = Object.assign(versionObj, {
  location: String
});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _require = require('./common');

var Author = _require.Author;

var _require2 = require('./component');

var Version = _require2.Version;

// Schema guide: http://mongoosejs.com/docs/guide.html

// allows easy extension

var schemaObj = {
  name: { type: String, index: true, required: true },
  description: String,
  date: { type: Date, index: true, required: true },
  version: { type: String, index: true, required: true },
  rating: Float, // virtual?
  author: Author,
  type: { type: String, index: true, required: true },
  keywords: { type: [String], index: true },
  categories: { type: [String], index: true },
  versions: [Version]
};

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schema)
};
'use strict';

var entities = require('../../artefacts/entities');

// top level entity schemas are named <entity>-schema.js
//  component-schema.js
module.exports = entities.names.reduce(function (schemas, name) {
  schemas[name] = require('./' + name + '-schema').schema;
  return schemas;
}, {});
'use strict';

var artefact = require('./artefact-schema');

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
var schemaObj = Object.assign(artefact.schemaObj, {});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
'use strict';

var artefact = require('./artefact-schema');

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
var schemaObj = Object.assign(artefact.schemaObj, {});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
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

      router.get('list', '/', this.list).get('item', '/:id', this.item).post('create', '/:id', this.create).put('update', '/:id', this.update).del('delete', '/:id', this.remove);

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
    key: 'remove',
    get: function get() {
      return function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  ctx.body = 'DELETE ' + entity + ' is not yet supported!';

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
    key: 'update',
    get: function get() {
      return function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  ctx.body = 'PUT/update ' + entity + ' is not yet supported!';

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
    key: 'list',
    get: function get() {
      return function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  ctx.body = 'GET/list ' + entity + ' is not yet supported!';

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
    key: 'item',
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
  }]);

  return RouterFactory;
}();
'use strict';

var factory = require('../factories/router');
var entities = require('../artefacts/entities');

module.exports = entities.list.map(function (entity) {
  return factory.createRouter(entity);
});
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var Io = require('../artefacts/io');

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
            io = new Io(entity);


            if (!io.validate()) {
              ctx.throw(406, 'invalid artefact type: ' + entity);
            }

            ctx.type = 'json';
            io.createJsonItem(id, ctx);
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
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var Io = require('../artefacts/io');

module.exports = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    var entity, id, io, jsonBody;
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
            io = new Io(entity);


            if (!io.validate()) {
              ctx.throw(406, 'invalid artefact type: ' + entity);
            }

            ctx.type = 'json';
            jsonBody = io.jsonItem(id);

            ctx.body = '[\n' + jsonBody + '\n]\n';

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function list(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return list;
}();
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var Io = require('../artefacts/io');

module.exports = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    var entity, io, jsonBody;
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
            io = new Io(entity);


            if (!io.validate()) {
              ctx.throw(406, 'invalid artefact type ' + entity);
            }

            ctx.type = 'json';
            jsonBody = io.jsonList.join(',');

            ctx.body = '[\n' + jsonBody + '\n]\n';

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function list(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return list;
}();
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var router = require('koa-router')();

router.get('/', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.state = {
              title: 'koa2 title'
            };

            _context.next = 3;
            return ctx.render('index', {});

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;
'use strict';

var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

module.exports = router;
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _ = require('../../utils');
var expectations = require('./expectations');
var data = require('../requests/create');

// to use expect:
// _.expect()

describe('apps', function () {
  describe('POST item', function () {
    it('should create a single app', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.callApi('/apps/contacts-app', 'POST', data);

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
'use strict';

var chai = require('chai'),
    expect = chai.expect;

module.exports = function (res) {
  expect(res.length).to.equal(1);
};
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _ = require('../../utils');
var expectations = require('./expectations');
var data = require('../requests/remove');

// to use expect:
// _.expect()

describe('apps', function () {
  describe('DELETE item', function () {
    it('should delete a single app', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.callApi('/apps/contacts-app', 'POST', data);

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
'use strict';

var chai = require('chai'),
    expect = chai.expect;

module.exports = function (res) {
  expect(res.length).to.equal(1);
};
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _ = require('../../utils');
var expectations = require('./expectations');

// to use expect:
// _.expect()

describe('apps', function () {
  describe('GET item', function () {
    it('should return a single app', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.callApi('/apps/contacts-app');

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
'use strict';

var chai = require('chai'),
    expect = chai.expect;

module.exports = function (res) {
  expect(res.length).to.equal(2);
};
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _ = require('../../utils');
var expectations = require('./expectations');

// to use expect:
// _.expect()

describe('apps', function () {
  describe('GET list', function () {
    it('should return a list of apps', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.callApi('/apps');

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
'use strict';

var chai = require('chai'),
    expect = chai.expect;

module.exports = function (res) {
  expect(res.length).to.equal(2);
};
'use strict';

// to use expect:
// _.expect()

var rating = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', _.callApi('/apps/contacts-app/rate', 'POST', data));

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

describe('apps', function () {
  describe('POST app rating', function () {
    it('should add a rating to the app', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
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
'use strict';

var chai = require('chai'),
    expect = chai.expect;

function ratingAdded(res) {
  expect(res.length).to.equal(2);
}

function duplicateUserRatingNotAdded(res) {
  expect(res.length).to.equal(2);
}

module.exports = {
  ratingAdded: ratingAdded,
  duplicateUserRatingNotAdded: duplicateUserRatingNotAdded
};
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _ = require('../../utils');
var expectations = require('./expectations');
var data = require('../requests/create');

// to use expect:
// _.expect()

describe('apps', function () {
  describe('UPDATE item', function () {
    it('should update a single app', _.doAsync(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.callApi('/apps/contacts-app', 'UPDATE', data);

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
'use strict';

var chai = require('chai'),
    expect = chai.expect;

module.exports = function (res) {
  expect(res.length).to.equal(2);
};
'use strict';

var Promise = undefined.Promise || require('promise');
var promised = require('superagent-promise');
var superagent = require('superagent');
module.exports = promised(superagent, Promise);
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
'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.should();

module.exports = {
  expect: expect,
  agent: require('./agent'),
  doAsync: require('./do-async'),
  koaApp: require('./koa-app'),
  callApi: require('./call-api')
};
'use strict';

module.exports = require('../../app.js');
