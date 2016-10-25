module.exports = {
  faker: {
    'string.useful': [{
      type: 'lorem',
      lorem: {
        method: 'words',
        args: [2]
      },
      transform: 'slugify'
    }]
  }  
}