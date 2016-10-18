## TODO: Testing

Create tests for:
- src/test/adapters
-  src/test/adapters/file/io
  - json-io.spec
  - file-io.spec  

Use `mock-fs` to mock file system, and use .json files in `/responses` to act as fake file content :)

Example of using `mock-fs` can be found [here](https://github.com/kristianmandrup/project-env/blob/master/src/test/lib/file-mock.spec.js)
Note that in the top I experimented with different ways to promisify the file system.
`fs-promise` mostly works...

Test all main API methods:
- create item
- create version
  - create first version
  - bad version (format?)
  - add version
  - conflict (exists) update?

- delete item
  - deleted ok
  - no such item exists
- delete version
  - deleted ok
  - no such version exists

- get item
  - get ok
  - no such item exists
 
- get version
  - get ok
  - no such item exists

- rating
- ...

...

### Route tests

The tests in `test/artefacts` should be moved into `test/routes` as they test routes.
Also reduce the folders. Either by method or artefact type:

```
components
  create.spec.js
  delete.spec.js
  ...
``

or by functionality, which could lead to better reuse pattern, overview and much more!

```
/delete
  /utils
    delete.js
  delete-component.spec.js
  delete-addon.spec.js
```  

### Improve testing architecture for max reuse and composition

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
test('Components', { beforeEach }).that('DELETE item', { ctx }).should('delete a single component', async () => {
  let result = await ctx.callApi(route, 'DELETE', data);         
  test.wasDeleted(result);         
})
```

We (I) will experiment with this in `sandbox/dsl-test.spec.js`

### Expectations

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

### Mongoose (MongoDB testing)

You can enable DB enable adapter via new `adapters/config.js`

```js
export default {
  file: true,
  db: false
}
```

Then mock Mongoose with [mock-mongoose](https://www.npmjs.com/package/mongoose-mock) using [Sinon]()

```js
var mongooseMock = require('mongoose-mock'),
  proxyquire = require('proxyquire'),
  chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  sinonChai = require("sinon-chai");
chai.use(sinonChai);
 
describe('User', function () {
 
  var User;
 
  beforeEach(function () {
    User = proxyquire('../../../model/User', { 'mongoose': mongooseMock });
  });
 
  describe('.createAndSave', function () {
    it('saves the user', function () {
      var callback = sinon.spy();
      var user = User.createAndSave({ title: 'Mr', lastName: 'White' }, callback);
      expect(user.save).calledOnce;
    });
  });
});
```
