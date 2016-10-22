const _ = require('../utils');
// to use expect:
// _.expect()

const Paths = require('../../adapters/file/utils/paths');

// TODO: use new test DSL

// test('route: components')
//   .that('GET version')            


describe('Paths', () => {
  let name = 'contacts';
  let entity = 'components';
  const paths = new Paths(entity, name);

  describe('#constructor', () => {                
    it('should set entity', () => {   
      _.expect(paths.entity).to.equal(entity);                
    });

    it('should set name', () => {   
      _.expect(paths.name).to.equal(name);                
    });
  });  

  describe('#entityDir', () => {                
    it('should return entity base folder', () => {   
      _.expect(paths.entityDir).to.match(/components$/);                
    });
  }); 

  describe('#folder', () => {                
    it('should return specific entity folder', () => {   
      _.expect(paths.folder).to.match(/components\/contacts$/);                
    });
  }); 

  describe('#itemPath', () => {                
    it('should return path to entity item response file', () => {   
      _.expect(paths.itemPath).to.match(/components\/contacts\/item.json/);                
    });
  }); 

  describe('#versionPath', () => {                
    it('should return path to entity item response file', () => {   
      _.expect(paths.versionPath).to.match(/components\/contacts\/version.json/);                
    });
  }); 
   
})