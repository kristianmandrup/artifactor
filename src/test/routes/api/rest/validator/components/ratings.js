const valid = {
  vote: 5,
  comment: 'Awesome stuff',
  user: 'trisha7'
}

module.exports = {
  invalid: (opts = {version: 0}) => {
    return Object.assign(valid, opts); 
  },
  valid,
}