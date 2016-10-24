## Using faker

Please read the full [Faker Readme](https://github.com/json-schema-faker/json-schema-faker) to get an overview 
of all the options at our disposal, such as custom fakers, passing arguments etc.

See 
- [faker.js](https://github.com/Marak/faker.js)
- [randexp](https://github.com/fent/randexp.js)
- [chance.js](https://github.com/chancejs/chancejs)
- ...

### Custom formats

```js
jsf.format('semver', function(gen, schema) {
  return gen.randexp('^\\d\\.\\d\\.\\d{1,2}$');
});
```

Now that format can be generated:

```js
{
  "type": "string",
  "format": "semver"
}
```

### Extending with custom fakers

Extending `faker.js`

```js
jsf.extend('faker', function(faker){
  faker.locale = "de"; // or any other language
  faker.custom = {
    statement: function(length) {
      return faker.name.firstName() + " has " + faker.finance.amount() + " on " + faker.finance.account(length) + ".";
    }
  };
  return faker;
});

var schema = {
  "type": "string",
  "faker": {
    "custom.statement": [19]
  }
}
```

You can also extend `Chance.js`, using built-in `chance.mixin` function:

```js
var jsf = require('json-schema-faker');

jsf.extend('chance', function(chance){
  chance.mixin({
    'user': function() {
      return {
        first: chance.first(),
        last: chance.last(),
        email: chance.email()
      };
    }
  });

  return chance;
});

var schema = {
  "type": "string",
  "chance": "user"
}
```