module.exports = class BaseAction {
  constructor(entity, {params}) {
    this.entity = entity;
    this.params = params;
    this.data = params.data;
    this.id = params.id;
    this.version = params.version;
  }
}