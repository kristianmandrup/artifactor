# Artifact Registry

This *Artifact Registry* server is being built using Koa 2 using ES7 async/await syntax.

## Usage
- install/configure
- run

### Install

- clone this repo
- `npm install` - install dependencies 

### Run

- `$ npm start` or `$ npm koa` - start the server

### Display and navigate

- Go to `localhost:3000` in your browser of choice!

## Architecture  

Currently designed to use `artefacts/io.js` to respond with canned responses from `.json` files.
In the future we plan to use a JSON database of some sort that is simple, easy to use and scalable.

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

To test CUD (Create, Update, Delete) functionality on entities, you can use the canned requests in `/test`:

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

Add similar requests for other entities... 

For starters simply try sending the requests using `CURL` or a similar HTTP Request tool. 
Then add real test suites...

## License

MIT