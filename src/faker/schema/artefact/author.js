module.exports = {
  properties: {
    name: {
      faker: 'name.findName',
    },
    alias: {
      faker: 'name.lastName'
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