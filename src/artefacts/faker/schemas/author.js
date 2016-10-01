module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      faker: 'name.findName',
    },
    alias: {
      type: 'string',
      faker: 'name.lastName'
    },
    email: {
      type: 'string',
      faker: 'internet.email'
    },
    organisation: {
      type: 'string',
      faker: 'company.companyName'
    },
    profileUrl: {
      type: 'string',
      faker: 'internet.url'
    }
  }
};