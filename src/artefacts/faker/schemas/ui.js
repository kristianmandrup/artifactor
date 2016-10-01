module.exports = {
  type: 'object',
  properties: {
    name: {
      enum: [
        'bootstrap',
        'foundation',
        'semantic-ui'
      ]
    },
    status: {
      enum: [
        'alpha',
        'beta',
        'stable'
      ]
    }
  }
};