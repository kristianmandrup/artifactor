# Mongo Tests

## Requirements

Requires MongoDB server process has been started:

`mongod` 

TODO: Use `mongoose-mock`

## Initialize with data

Use `tests/data` to populate DB with data, possibly using Faker or canned responses.

## Rework schema and tests

We will no longer have the concept of item vs version. There is only ONE domain model, `artifact`
and each instance is a version. Pure and simple!  