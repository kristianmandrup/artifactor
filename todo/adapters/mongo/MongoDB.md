# Mongo DB adapter

The Mongo DB adapter has highest priority. We need to use many of the amazing features of Mongoose:
- plugins
- virtual properties
- ...

We need to use `pre` and `post` hooks.

## Validation

Use [mongoose-validator](https://github.com/xpepermint/mongoose-validator)

## Models

We need to enhance the current model...

### Author

(For now)

Currently we only have an `Artefact` model. We need to enhance this with an `Author` model.
When an artefact is created, we will use a `pre:save` hook to look up the email in the Author registry, or perhaps 
even on github etc. If we find this user, we will link to that model via a reference `ref`.
If not found we will create such a model. If we don't have enough Author info at hand we will try to 
find and fill in relevant author info from another site where he/she is registered. Alternatively we will respond
with a message asking him/her to supply more information.

Having a separate Author model allows us to find artefact per author and many other things...
This is also key for the Payment and monetization.

An `Author` is a `User` who has published one or more artefacts. 
A `User` is someone who is only currently registered as a consumer and can buy Dev coins etc. 

## Organisation

(For later!)

We need to add an `Organisation` model as well. A User (or Author) can belong to an organization.
The organisation can also deposit Dev Coins which any of the devs are free to use (responsibly).

An organisation can define rules, such that f.ex all its artefacts are private and only accessible 
by its own members or invited members (oreign organisations or specific users).



