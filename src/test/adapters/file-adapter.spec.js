const { expect } = require('../utils');
// to use expect:
// _.expect()

const ioAdapter = require('../../adapters/file-adapter');

describe('File Adapter', () => {
  let name = 'contacts';
  const components = ioAdapter.adapt('components', name);

  describe('#item', () => {            
    it('should return item file content as json', async () => {
      let json = await components.item();
      console.log('CONTENT', json);
      expect(json.name).to.equal('contacts');
      expect(json.versions.length).to.equal(2);
    });
  });
});