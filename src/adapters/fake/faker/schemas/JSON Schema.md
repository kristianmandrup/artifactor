# JSON Schema 

[reuse](https://spacetelescope.github.io/understanding-json-schema/structuring.html#reuse)

Put reusable schema elements under definitions:

```json
{
  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city":           { "type": "string" },
        "state":          { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  }
}
```

We can then reference this entry: `{ "$ref": "#/definitions/address" }`
The value of `$ref` is a string in a format called [JSON Pointer](https://tools.ietf.org/html/rfc6901)

Therefore, in our example `"#/definitions/address"` means:

go to the root of the document
find the value of the key `"definitions"`
within that object, find the value of the key `"address"`
`$ref` can also be a relative or absolute URI, so if you prefer to include your definitions in separate files, 
you can also do that. For example:

`{ "$ref": "definitions.json#/address" }`

would load the address schema from another file residing alongside this one.