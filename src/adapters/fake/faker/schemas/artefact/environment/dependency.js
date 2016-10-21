module.exports = {
  type: 'object',
  properties: {
    version: {
      $ref: '#/definitions/version'
    }
  },
  required: ['version']
};