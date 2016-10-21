# Simplify the design

## Types of artefacts

Does it really make sense to have all these different artefacts, with specific routes, schemas etc???
Why not just have one Artefact entity and then have a `type` field?

## Version or item

Get rid of the `item` concept. Everything is a `version`. There is only one model, the `Artefact` 

Calling `components/contacts` retrieves latest version by default, then lists other most recent versions alongside.
Ideally use Graph QL or similar!?

## Update

Please see lates routes/api for details on new simplified API where there are 
*only Artefacts and everything is a version :)*

