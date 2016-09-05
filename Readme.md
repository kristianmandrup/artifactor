# Artifact Registry

This *Artifact Registry* app/API web server is being built using Koa 2 using ES7 async/await syntax.

The initial project was generated using [koa-generator](https://www.npmjs.com/package/koa-generator)
using `koa2` binary: `$ koa2 artifactor` 

## Usage
- install/configure
- run

### Install

- clone this repo
- `npm install` - install dependencies 

### Build

`npm run build` - builds `/src` folder and puts resulting `app.js` in `/dist`

### Auto build

`npm run watch` - builds `/src` and watches for changes to src file for auto-build!

### Run

- `$ npm start` or `$ npm koa` - start the server

### Display and navigate

- Go to `localhost:3000` in your browser of choice!

## Koa boilerplate

Example of [Koa2 boilerplate project](https://github.com/llambda/koa-boiler)
Look at [Koa2 tutorial](https://dinosaurscode.xyz/nodejs/2016/06/28/nodejs-koa2-tutorial/)

Generators:
- [generator-koa2](https://www.npmjs.com/package/generator-koa2)
- [generator-koa2-rest](https://www.npmjs.com/package/generator-koa2-rest)

## Generator koa2 REST

`npm install -g generator-koa2-rest yo`

Run `yo koa2-rest`

Run `npm start` and navigate to `localhost:9000`

### Creating another endpoint
Navigate to project folder and run `yo koa2-rest:api resource-name`

This will create a folder under src/api/ with the name of the resource with an index, controller, model. Test files will be generated in test/e2e and test/unit

## Architecture  

### app.js

Uses the following middleware:
- [bodyparser](https://www.npmjs.com/package/koa-bodyparser)
- [json](https://www.npmjs.com/package/koa-json)
- [logger](https://www.npmjs.com/package/koa-logger)
- [static](https://www.npmjs.com/package/koa-static)
- [router](https://www.npmjs.com/package/koa-router)
- [views](https://github.com/queckezz/koa-views) - supports pug
- [Pug views](https://www.npmjs.com/package/pug) formerly Jade templating via [koa-pug](https://github.com/chrisyip/koa-pug)

## Routes

The routes can be found in the folder `/routes`
Please see the `artefacts.js`. It maps over the list of entities and calls `factory.createRouter(entity)` to 
create a new Roter for each entity. The list of `Router` instances are returned and can 
be added to the Koa app.

The router factory can be found in: `factories/router.js`

```js
createRouter(entity) {
  const router = new Router({
    prefix: `/${entity}`
  });

  router
    .get('list', '/', this.list)
    .get('item', '/:id', this.item)
    .post('create', '/:id', this.create)
    .put('update','/:id', this.update)
    .del('delete', '/:id', this.remove);

  return router;
}
```

The router is based on [koa-router 7.x](https://www.npmjs.com/package/koa-router) for Koa 2.
See `dependencies` entry in `package.json`: `"koa-router": "^7.0.0",`

The `createRouter` creates a generic REST based Router using a Rails like REST convention.
- `:id` is the identifier, ie. the unique name of the registered artefact (NOT a number!).
- `prefix` is the prefix for each of the routes generated, ie the type of entity such as `component`

In the end for a `contacts` component, the REST routes would be:
- GET `/components/contacts` (GET to read/retrieve the single item `contacts`)
- POST `/components/contacts` (POST to create the single item `contacts`)  
...

## Mongoose DB and Models/Schemas

Mongoose DB Models and Schemas are configured in the `db` folder. 
The `models.js` exports an object with entity models, each linked to a schema.
See [Mongoose models](http://mongoosejs.com/docs/models.html)

We can thus create instances of models as follows:

```js
const models = require('./db/models');
let components = {};
components.contacts = new models.Component({
  name: 'contacts', 
  // ...
})
```

## Pug views

See [koa-view pug test](https://github.com/queckezz/koa-views/blob/master/test/index.js)

```js
 it('default to [ext] if a default engine is set', function (done) {
    const app = new Koa()
    .use(views(__dirname, { extension: 'pug' }))
    .use(function (ctx) {
      return ctx.render('./fixtures/basic')
    })
```    

## Database

## Async/await

An alternative way to add ES7 [Node async/await](https://github.com/yortus/asyncawait) using Node fibers.

```js
var async = require('asyncawait/async');
var await = require('asyncawait/await');
```

Also see [Node.js Async Await in ES7](http://stackabuse.com/node-js-async-await-in-es7/)

## IO

Currently designed to use `artefacts/io.js` to respond with canned responses from `.json` files.

In the future we plan to use a JSON database (Mongo DB via [Mongoose](http://mongoosejs.com/docs/)) which is simple, easy to use and scalable.
Later on we might well use [KeystoneJS](http://keystonejs.com/) - which uses Mongoose under the covers...

### Canned API responses

The following is the current structure for canned API responses. 
Use the same file structure (pattern) for each entity.

```
/artefacts
  /addons
  /apps
  /components
    /contacts
      item.json
      version.json
    list.json
  /libs
  /plugins
  io.js
```

## Test

To test CUD (Create, Update, Delete) API REST functionality, you can use the canned requests in `/test`:

```
/test
  /artefacts
    /components
      /requests
        /contacts
          create.json
          rate.json
          remove.json
```

There are  similar requests for the other artefacts. 

For starters simply try sending the requests using `CURL` or a similar HTTP Request tool. 
Then add real test suites using [mocha](https://mochajs.org)

## License

MIT