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

`npm run build` - builds `/src` folder and puts resulting ES5 `.js` files in `/dist`

### Auto build

`npm run watch` - builds `/src` and watches for changes to `/src` files for auto-build!

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

### artefacts

The `/artefacts` folder contains canned API responses in `.json` files for each artefact type.
The `io.js` can be used to access these files, f.ex via:
- `jsonItem(id)` - return specific artefact item
- `jsonList(id)` - return list of artefact items
- `files()` - return all artefact items (with full `versions` list for each item)

You can start playing with the API using these files, building up the test suite and then 
gradually switch to using Mongo DB schemas/models for the API. 

Use the `/adapters` folder to add an adapter, either for the file IO or mongoose.

## Couch DB for Pouch DB (sync)

### Setup

See [setup couchdb](https://pouchdb.com/guides/setup-couchdb.html)

OSX: `$ brew install couchdb`

Once CouchDB is installed, it should be running at `localhost:5984`

`sudo couchdb`

### Add CORS

```bash
npm install -g add-cors-to-couchdb
add-cors-to-couchdb
```

## Mongo DB via Mongoose

### Mac OSX - Mongo DB
Configuring Mongo DB. First install [homebrew](https://github.com/Homebrew/brew)

`$ brew install mongodb` 

Then run mongo deamon process

`$ mongod`

If it terminates with error `Data directory /data/db not found., terminating`: 
- create missing storage folder which holds databases
- set permissions

```
$ sudo mkdir -p /data/db/`
$ sudo chown -R `id -u` /data/db
```

Also see this gist: [ install-mongodb](https://gist.github.com/adamgibbons/cc7b263ab3d52924d83b)

### Models/Schemas

Mongoose DB Models and Schemas are configured in the `/db` folder. 
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

## Promises

Just use bluebird if no native Promise ;)

`mongoose.Promise = global.Promise || require('bluebird');`

## Queries

[Mongoose Queries](http://mongoosejs.com/docs/queries.html)

"In mongoose 4, a Query has a `.then()` function, and thus can be used as a promise."

Mongoose queries are not promises. However, they do have a `.then()` function for yield and async/await. 
If you need a fully-fledged promise, use the `.exec()` function.

Mongoose async operations, like `.save()` and queries, return Promises/A+ conformant promises. 
This means that you can do things like `MyModel.findOne({}).then()` and `yield MyModel.findOne({}).exec()` 
(if you're using [co](https://github.com/tj/co) or async/await etc. via Babel).

Promises are returned from executed queries. Example:

```js
var query = Candy.find({ bar: true });
var promise = query.exec();
```

See [Switching out callbacks with promises in Mongoose](http://eddywashere.com/blog/switching-out-callbacks-with-promises-in-mongoose/)

### Save

```js
fluffy.save().then(fluffy => {
  fluffy.speak();
}).catch(err => {
  
});
```

Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.

```js
Kitten.find().exec().then(kittens => {
  console.log(kittens);
}).catch(err => {

})
```

### Removing models

Models have a static `remove` method available for removing all documents matching conditions.

`Tank.remove({ size: 'large' }).exec().then(onSuccess).catch(onError)`

### Find by conditions

We just logged all of the kittens in our db to the console. If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.

```js
Kitten.find({ name: /^fluff/ }).exec().then(onSuccess).catch(onErr);
```

### Find one and update

To update an artefact, use `findOneAndUpdate` as follows: 

`Component.findOneAndUpdate(query, update, {'upsert': true}).exec().then(onSuccess, onError);`

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