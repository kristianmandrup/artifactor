const _ = require('../utils');
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
      _.expect(json.name).to.equal('contacts');
      _.expect(json.versions.length).to.equal(2);
    });
  });
});