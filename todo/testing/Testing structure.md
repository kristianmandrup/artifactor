# Improve testing architecture for max reuse and composition

## Status

Mostly done

## TODO

Instead of:

```js
describe('components', () => {
  describe('DELETE item', () => {
    let ctx = {}; 

    it('should delete a single component', async () => {   
      let result = await _.callApi(route, 'DELETE', data);         
      test.wasDeleted(result);       
    });
```

We can encapsulate this pattern, using higher order functions to something like:

```js
ctx = // something that sets up context obejct for testing
test('Components', { beforeEach })
  .that('DELETE item', { ctx })
  .will('delete a single component', async () => {
    let result = await ctx.callApi(route, 'DELETE', data);         
    test.wasDeleted(result);         
  })
  .run();
```

We (I) will experiment with this in `sandbox/dsl-test.spec.js`

## Expectations

For expectations, use a custom DSL, like:

`test.wasDeleted(result);` (This example in: `delete/component-delete.spec.js`) 

```js
var chai = require('chai'),
    expect = chai.expect;

module.exports = {
  // deleted is true
  wasDeleted: (res) => {
    expect(res.body.deleted).to.equal(true);
  },

  // should be an error
  doesNotExist: (res) => {
    expect(res.body.error).to.exist;
  } 
}
```

OR use classes for better composition? perhaps with `@mixin` use via decorators!


```js
class TestCreate {
  constructor(result) {
    this.result = result;
  }

  test() {
    expect(this.result.body.created).to.equal(true);
  }  
}

class TestCreateContacts extends TestCreate {
  constructor(result) {
    super(result);
  }

  test() {
    super.test(); // reuse base tests for any create
    expect(this.result.body.created).to.equal(true);
  }
```