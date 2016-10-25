module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    version: {
      $ref: '#/definitions/version'
    }
  },
  required: ['version', 'name']
};