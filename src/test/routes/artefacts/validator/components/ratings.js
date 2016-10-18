const valid = {
  name: 'contacts',  
  version: '1.2.1',
  rating: {
    vote: 5,
    comment: 'Awesome stuff',
    user: 'trisha7'
  }
}

module.exports = {
  invalid: (opts = {version: 0}) => {
    return Object.assign(valid, opts); 
  },
  valid,
}