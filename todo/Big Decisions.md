# Simplifying the design

## Types of artefacts

Does it really make sense to have all these different artefacts, with specific routes, schemas etc???
Why not just have one Artefact entity and then have a `type` field?

## Version or item

Does it make sense to distinguish between item and versions?
Is it not just all versions?

An `item` is just the latest version (default). 

Calling `components/contacts` retrieves latest version by default, then lists other most recent versions alongside.
Ideally use Graph QL or similar!?

