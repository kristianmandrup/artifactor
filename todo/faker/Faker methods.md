# Faker methods

Original JSON schema used for validation is decorated with Faker specifications used to generate fake data
for a JSON instance. The faker.js has been updated with better Date formatting and now also powerful new String methods:

See [test/string.unit.js](https://github.com/kristianmandrup/faker.js/blob/ca6c76c597cd45450e25437a9d8bb08e19e37822/test/string.unit.js)

```js
faker.string.useful({
  type: 'lorem',
  lorem: {
    method: 'words',
    args: [2]
  },
  transform: 'slugify'
})
```           

We can use in a schema as follows:

```js
properties: {
  name: {
    faker: {
      'string.useful': [{
        type: 'lorem',
        lorem: {
          method: 'words',
          args: [2]
        },
        transform: 'slugify'
      }]
    }
  }
}
```           

