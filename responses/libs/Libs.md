# Libraries registration

The *Libraries registry* (libs) contains meta data for registered libraries to be bundled with the app.

The main key is `install` which may contain the keys: 
- `bundles`
- `dependencies`

The `bundles` section is merged with `aurelia.json` bundles for bundling the app for distribution/running.
The `dependencies` section is used to configure/install various types of artefacts in the app which the 
library requires.

```json
"install": {
  "bundles": {
    "vendor-lib.js": {
      "dependencies": [

      ],
      "prepend": [
        
      ]               
    }
  },
  "dependencies": {
    "libs": [
      "lodash"
    ]
  }
} 
```

## Lib group

```json
"name": "animation-libs",
"type": [
  "lib",
  "group",
]
"group": [
  "greensock",
  "velocity"
]
```
