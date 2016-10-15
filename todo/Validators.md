## Validators

We need to add Request validation using JSON schema.
Initial structure has been defined in `routes/entities/validator`

Please see: [JSON schema guide](https://spacetelescope.github.io/understanding-json-schema/)
Important: Use [Enumerated values](https://spacetelescope.github.io/understanding-json-schema/reference/generic.html#enumerated-values)

Example:

```js
module.exports = {
  type: 'object'
  properties: {
    name: {
      type: 'string'
      enum: ['good', 'bad', 'ugly']
    }
  }
  required: ['name'] // which properties are required
}
``` 
