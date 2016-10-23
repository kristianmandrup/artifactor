const { display, expect } = require('../utils');

module.exports = {
  hasActions: (adapter) => {
    // TODO: check which particular actions available
    return expect(adapter.actions).to.be.defined;
  }
}