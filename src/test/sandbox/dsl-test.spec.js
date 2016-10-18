require("babel-core/register");
require("babel-polyfill");

const fs = require('fs-promise');
import path from 'path'; 
const test = require('mocha-test-dsl');

var chai = require('chai'),
    expect = chai.expect;

const context = {
  delete: async () => {
    try {
      await fs.stat(path.join(__dirname, './dsl.js'));
      return true;
    } catch (err) {
      return false;
    }    
  }
}

const check = {
  wasDeleted: (ctx) => {
    expect(ctx).to.eql(true);
  },
  wasIdexed: (ctx) => {
    expect(true).to.eql(true);
  }
}

class Ctx{
  constructor() {
    this.x = 1;    
  }

  before() {
    console.log('x = ', this.x)
  }

  beforeEach() {
    console.log('before each');
  }

  after() {
    this.x = 0;
    console.log('x = ', this.x)
  }

  afterEach() {
    console.log('after each');
  }  
} 

test('Addon')
  .that('READ item')
  .for('some cool stuff')
  .will('read a single component', () => {
    expect(1 + 1).to.eql(2);
  })
  .run();

test('Components')
  .that('DELETE item', {
    prepare: Ctx
  })
  .should('delete a single component', async () => {
    let result = await context.delete(); 
    check.wasDeleted(result);
  })
  .should('delete also update index', () => {
    check.wasIdexed(true);
  })
  .run()