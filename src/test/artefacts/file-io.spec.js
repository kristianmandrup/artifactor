const _ = require('../utils');
// to use expect:
// _.expect()

const fileIo = require('../../artefacts/file-io');

describe('Io', () => {
  let name = 'contacts';
  const components = fileIo.create('components', name);

  describe('#item', () => {            
    it('should return item file content', (done) => {
      components.item().then(res => {   
        // console.log('ITEM', res);
        _.expect(res).to.match(/"name": "contacts"/);
        done();
      }).catch(err => {
        console.error(err);
      })
    });
  });

  describe('#list', () => {            
    it('should return list file content with 3 items, first item contacts', async () => {
      let content = await components.list();
      console.log('CONTENT', content);
      let json = JSON.parse(content);
      _.expect(json.length).to.equal(3);   
      _.expect(json[0].name).to.equal('contacts');                
    });
  });


  // TODO: Fix this
  // See: http://staxmanade.com/2015/11/testing-asyncronous-code-with-mochajs-and-es7-async-await/
  // See: https://github.com/mochajs/mocha/issues/2407
  // Error: Resolution method is overspecified. Specify a callback *or* return a Promise; not both.
  // describe('#file(name)', () => {            
  //   it('should return file content', _.doAsync(async (done) => {   
  //     let result = await components.file(name);
  //     console.log('res', result);         
  //     _.expect(result).to.not.be.empty;
  //   }));                            
  // });

});
