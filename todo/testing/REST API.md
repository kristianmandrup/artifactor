## REST API tests

- create version
  - create first version
  - bad version (format?)
  - add version
  - conflict (exists) update?

- delete version
  - deleted ok
  - no such version exists

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