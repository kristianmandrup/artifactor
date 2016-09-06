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