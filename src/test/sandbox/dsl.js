require('babel-core/register');
require('babel-polyfill');

const chai = require('chai');
chai.should();

class Tester {
  constructor(parent, text, opts) {
    this.parent = parent;
    this.text = text;
    this.opts = opts;
    this.itFuns = [];

    this.will = this.should;

    if (typeof opts === 'function') 
      this.fun = opts;    

    if (typeof opts === 'object' && this.opts.prepare) {
      this.clazz = opts.prepare;                
    }      
  }

  that(text, opts) {
    return new Tester(this, text, opts);
  }

  for(text, opts) {
    return new Tester(this, text, opts);
  }

  describe(fun) {
    if (this.parent) {
      // console.log('describe w parent', this.text)      
      this.parent.describe(() => {
        let instance;
        if (this.clazz) {
          instance = new this.clazz();
        }
        
        if (instance && instance.beforeEach)
          before(instance.before);      

        if (instance && instance.beforeEach)
          beforeEach(instance.beforeEach);                      

        if (instance && instance.afterEach)
          afterEach(instance.afterEach);                      

        if (instance && instance.after)       
          after(instance.after);
        
        describe(this.text, fun);
      })    
    } else {
      describe(this.text, fun);      
    }
  }

  should(text, fun) {
    // console.log('should parent', this.parent.text)
    this.itFuns.push(() => {
      it(text, fun);
    });
    return this;
  }

  run() {     
    return this.describe(() => {

      for (let fun of this.itFuns) {
        fun();                

      }    
    })
  }  
}

export const expect = chai.expect;
export function test(text, opts) {
  return new Tester(null, text, opts);
}
