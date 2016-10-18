module.exports = {
  name: {
    type: 'string',
    minLength: 2,
    maxLength: 30  
  },
  type: {
    type: 'string',
    enum: ['component', 'app', 'addon', 'plugin', 'theme']
  },
  version: {
    type: 'string',
    pattern: '^(\d+\.)?(\d+\.)?(\*|\d+)$'
  },    
  date: {
    type: 'string',
    format: 'date-time'
  },
  required: ['name', 'type', 'version', 'date']  
}