module.exports = class BaseAction {
  constructor(params) {
    this.params = params;
    this.entity = params.entity;    
    this.data = params.data;
    this.id = params.id;
    this.version = params.version;
  }
}