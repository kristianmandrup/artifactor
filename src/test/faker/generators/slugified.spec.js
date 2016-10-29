const { display, check, test } = require('../env');

const fakerSchema = {
  name: require('./name-schema')
}

const jsf = require('json-schema-faker')

test('jsf')
  .that('slugified named: string.useful')
    .will('return dashed string', () => {
      let result = jsf(fakerSchema);
      display(result)
      check.special(result)
        .isSlugified();
    })
    .run()
