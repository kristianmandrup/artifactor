const _ = require('../utils');
// to use expect:
// _.expect()

const fileIo = require('../../artefacts/file-io');

describe('Io', () => {
  let name = 'contacts';
  const components = fileIo.create('components', name);

  describe('#item', () => {            
    it('should return item file content', (done) => {
      console.log(components.item);
      components.item().then(res => {   
        console.log('res', res);
        _.expect(res[0].name).to.equal('contacts');
        done();
      })
    });
  });

  // describe('#list', () => {            
  //   it('should return list file content', _.doAsync(async () => {
  //     let res = await components.list;   
  //     _.expect(res).to.match(/components\/list.json/);                
  //   }));
  // });


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
