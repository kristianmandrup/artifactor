const BaseIO = require('../io/base');

module.exports = class BaseAction extends BaseIO {
  constructor(entity, {params}) {
    super(entity, {params})
  }
}