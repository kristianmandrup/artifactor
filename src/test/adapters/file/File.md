# File tests

Use `mock-fs` to mock file system (See [project-env](https://github.com/kristianmandrup/project-env))

Populate mock files using faker generator:

```js
const { generatorFor } = require('../../../../adapters/fake/faker')
const generate = generatorFor('component');

const {createFileSaver} = require('../artefact/io/file-saver');

while (i < 20) {
  let artefact = generate(i++);
  createFileSaver(artefact).save();
}
```

Please see `test/data` with initial infrastructure for population... 

