# Artefact file structure

```
artefact.json
map.json
/view-models
/services
/ui
/preview
/fakes
/test
/docs
...
```

# Test artefact

```bash
/tests
  - map.json
  - Tests.md
  /unit
    /mocha
      - contacts.spec.js
    /karma
      - …
  /e2e
    /nightwatch
      - …
    /protractor
```

`map.json`

```bash
{
  “unit”: {
    “mocha”: {
      "versions": {
        “^1.0”: {
          "path": “unit/mocha”,
          "dependencies": {
            "libs": {
              "mocha": "^1.0"
            }
          }
        }
        “^2.0”: {
          "path“: "unit/mocha-v2”,
          "dependencies": {
            "libs": {
              "mocha": "^2.0"
            }
          }
        }
      }
    },
    “karma”: “unit/karma”
  }
  “e2e”: {
    …
  }
  …
}
```