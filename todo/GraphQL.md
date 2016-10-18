## GraphQL

Use [koa-graphql](https://github.com/chentsulin/koa-graphql) 

For Koa 2, use koa-convert to convert the middleware:

```js
var koa = require('koa');
var mount = require('koa-mount'); // koa-mount@2.x
var convert = require('koa-convert');
var graphqlHTTP = require('koa-graphql');

var app = new Koa();

app.use(mount('/graphql', convert(graphqlHTTP({ schema: MyGraphQLSchema, graphiql: true }))
```
