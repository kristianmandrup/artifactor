const _ = require('../utils');
// to use expect:
// _.expect()

const io = require('../../artefacts/io');

describe('Io', () => {
  const components = io.create('components')
  let name = 'contacts';

  describe('#entityDir', () => {                
    it('should return entity folder', () => {   
      _.expect(components.entityDir).to.match(/artefacts\/components$/);                
    });
  });

  describe('#folder(name)', () => {            
    it('should return entity folder', () => {   
      _.expect(components.folder(name)).to.match(/components\/contacts/);                
    });
  });

  describe('#listFile', () => {            
    it('should return list file path', () => {   
      _.expect(components.listFile).to.match(/components\/list.json/);                
    });
  });


  // TODO: Fix this
  // See: http://staxmanade.com/2015/11/testing-asyncronous-code-with-mochajs-and-es7-async-await/
  // See: https://github.com/mochajs/mocha/issues/2407
  // Error: Resolution method is overspecified. Specify a callback *or* return a Promise; not both.
  describe('#file(name)', () => {            
    it('should return file content', _.doAsync(async (done) => {   
      let result = await components.file(name);
      console.log('res', result);         
      _.expect(result).to.not.be.empty;
    }));                            
  });

});
