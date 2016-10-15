const _ = require('../utils');
// to use expect:
// _.expect()

const jsonIo = require('../../artefacts/json-io');

describe('JsonIo', () => {
  let name = 'contacts';
  const components = jsonIo.create('components', name);

  describe('#item', () => {            
    it('should return item file content', async () => {
      let json = await components.getItem();
      console.log('CONTENT', json);   
      _.expect(json.name).to.equal('contacts');
      _.expect(json.versions.length).to.equal(2);
    });
  });

  // describe('#version', () => {            
  //   it('should return item file content', async () => {
  //     let json = await components.getVersion();
  //     // console.log('CONTENT', content);   
  //     _.expect(json.name).to.equal('contacts');
  //     _.expect(json.version).to.equal('1.2');
  //   });
  // });

  // describe('#list', () => {            
  //   it('should return list file content with 3 items, first item contacts', async () => {
  //     let json = await components.getList();
  //     _.expect(json.length).to.equal(3);   
  //     _.expect(json[0].name).to.equal('contacts');                
  //   });
  // });
})