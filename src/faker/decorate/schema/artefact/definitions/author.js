module.exports = {
  properties: {
    name: {
      faker: 'name.findName',
    },
    alias: {
      $ref: '#/definitions/name'
    },
    email: {
      faker: 'internet.email'
    },
    organisation: {
      faker: 'company.companyName'
    },
    profileUrl: {
      faker: 'internet.url'
    }
  }
};