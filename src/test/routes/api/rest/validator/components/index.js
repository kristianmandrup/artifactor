const valid = {
  name: 'mindbender',
  type: 'component',
  version: '1.0',
  date: '7/7/2016'
}

module.exports = {
  create: {
    invalid: (opts = {name: ''}) => {
      return Object.assign(valid, opts); 
    },
    valid,
  },
  remove: require('./remove'),
  rate: require('./ratings')
}