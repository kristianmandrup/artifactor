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