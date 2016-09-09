const _ = require('../utils');
// to use expect:
// _.expect()

const jsonIo = require('../../artefacts/json-io');

describe('JsonIo', () => {
  let name = 'contacts';
  const components = jsonIo.create('components', name);
})