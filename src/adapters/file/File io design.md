## File IO design

### Json IO

The Json IO is an IO handler which performs JSON operations such as read and write JSON to a file.
Json IO has access to a File IO as `this.io` which can perform file operations such as delete, move or copy a file etc.

TODO: Some refactoring is needed to move methods such as `addVersion` and `rate` from File IO into JSON IO.

It could also include other typical JSON operations such as:
- merge a source object with an target object (in file) at a specific path 
- delete target object at specific path in JSON
- ...

See [jsonpath](https://www.npmjs.com/package/json-path) utility for how to use a JSON path.

Also see [ai-core IO](https://github.com/kristianmandrup/ai-core/blob/master/lib/utils/io.js) for some 
attempts at generalizing certain typical IO and JSON operations (not yet using async/await or jsonpath). 

### File IO

Can perform file operations such as delete, move or copy a file etc. It operates on files in `responses` root folder.

TODO: Some refactoring is needed to move methods such as `addVersion` and `rate` from File IO into JSON IO.