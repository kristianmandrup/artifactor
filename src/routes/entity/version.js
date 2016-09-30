const BaseRoute = require('./base');

module.exports = class VersionRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options, 'version');
  }

  extract() {   
    this.params = {
      id: this.ctx.params.id || 'contacts',
      version: this.ctx.query.version || '1.0'
    }
  }

  error() {
    console.error('Version route error');
  }
}