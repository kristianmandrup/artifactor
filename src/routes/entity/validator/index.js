const jsonschema = require('jsonschema');
const Validator = jsonschema.Validator;
const schemas = require('./schemas'); 

import { once, memoize } from 'lodash-decorators'

// Should validate request
class RequestValidator {
  constructor(ctx) {
    this.request = ctx;
    this.validator = new Validator();

    this.method = ctx.method || 'get';
    this.entity = ctx.entity;

    // See https://spacetelescope.github.io/understanding-json-schema/
    this.schema = schemas[this.method];     
  }  

  @memoize()
  validate() {
    if (!this.schema)
      return true;
    return this.validator.validate(this.request, this.schema);
  }
}

module.exports = RequestValidator; 