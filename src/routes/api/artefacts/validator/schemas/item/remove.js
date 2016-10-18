module.exports = {
  name: {
    type: 'string',
    minLength: 2,
    maxLength: 30  
  },
  version: {
    type: 'string',
    pattern: '^(\d+\.)?(\d+\.)?(\*|\d+)$'
  },    
  key: {
    type: 'string',
    minLength: 10,
    maxLength: 30  
  }
}
