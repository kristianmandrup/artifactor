## Task list

This is a prioritized task list, subject to change as we progress.
Currently the main objective is to get an MVP server up and running.
Initially we will only support a REST API.

When we have basic CRUD and list/search functionality in place we will start developing the server UI,
which is to look and function much like [npm server site](https://www.npmjs.com)

The key is to follow a Test Driven approach. Start by writing tests using [mocha test DSL](https://www.npmjs.com/package/mocha-test-dsl)
Then make them pass. See current testing infrastructure to get an idea for the conventions.
Minimize duplication, maximize reuse! Also use ES2016 syntax and async/await to a large extent.
Avoid callbacks!

### Tasks

#### Server Infrastructure and REST API

- Test Validator (based on json schema)
- Test Faker (based on json schema faker)
- Test Data populater (using faker)
- Configure use of mongo adapter using `adapters/config.js`
- Populate Mongo DB using fake data (test using [mock-mongoose](https://www.npmjs.com/package/mongoose-mock))

- Develop and Test basic Mongo model API (in accordance with REST API specs)
- Develop and Test Mongo adapter using Mongo Model API
- Develop and Test Action Routes using Mongo Adapter
- Develop and Test full REST API 

#### Server UI

- Create [Quasar Vue2](http://quasar-framework.org/) app for Server using Server Side Rendering.
- [search](http://quasar-framework.org/components/search.html) to search for artefacts
- form inputs for filtering, such as:
  - [chips textbox](http://quasar-framework.org/components/chips-textbox.html)
  - [date time dialog](http://quasar-framework.org/components/datetime.html)
  - [select](http://quasar-framework.org/components/select.html)
  - [numeric](http://quasar-framework.org/components/numeric.html)

The search should allow for auto-complete and show a [list](http://quasar-framework.org/components/list.html) with 
name of artefact and avg. rating (stars) 

- [infinite scroll component](http://quasar-framework.org/components/infinite-scroll.html) to display search results
- [breadcrumb](http://quasar-framework.org/components/breadcrumb.html) to navigate artifacts
- [cards](http://quasar-framework.org/components/cards.html) to display an artefact, user or organisation
- [slider](http://quasar-framework.org/components/slider.html) to slide between artefacts (from list) or artefact versions
- [timeline](http://quasar-framework.org/components/timeline.html) to display time line of artefact (version progression tells a story!)
- [chat](http://quasar-framework.org/components/chat.html) to chat with artefact owner/author
- [drawer](http://quasar-framework.org/components/drawer.html) to display sidebar with settings, user profile etc
- [rating](http://quasar-framework.org/components/rating.html) for rating artefact
- [progress bar](http://quasar-framework.org/components/progress-bar.html) to show maturity/progress of individual artefact features 

- Keep list of previous visited artefacts in localstorage
- Allow for bookmarking (and unbookmarking) artefacts visited so we can easily find them later 

- Allow owner/author of artefact version to edit properties directly 
- For author, display *pen* icon next to property
  Click on pen allows inline editing of property, such as via [textarea](http://quasar-framework.org/components/textarea.html)
  for description etc. 

## Advanced UI

Add payment, bounty, rewards overview etc.

To set bounty request:
- Use [knob](http://quasar-framework.org/components/knob.html)
- or [range](http://quasar-framework.org/components/range.html)
  
