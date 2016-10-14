## Refactor folder/file structure

Currently the file adapter can be found in src/artefacts/io. 
The Json and File IO classes need refactoring as described in `Testing.md` on `testing` branch.

Move everything adapter related files/folders into `adapters` folder, ie `db` and `artefacts/io`.
The resulting file structure should be (sth?) like this:

```bash
/adapters
  /db
    /mongo
    /rethink
    /couch

  /file
    index.js (JSON IO) - main class to perform API operations on files
    /utils
      index
      file.js (helpers for file manipulation, ie. `delete` file etc.)
      json.js (utils for JSON operations such as `merge`, `delete` - use `jsonpath` lib)
```

The same should be done for the testing file structure so it matches main `src` structure