const _ = require('lodash');
// add inflection to lodash
_.mixin(require('lodash-inflection'));

module.exports = {
  clazzName: (name) => {
    return _.capitalize(_.singularize(name));
  }
}