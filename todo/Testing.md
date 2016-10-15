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
