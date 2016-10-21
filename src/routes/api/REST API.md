# REST API

### Versions API

- `:type/:id/versions` - all versions

- `:type/:id/version` - latest version only
- `:type/:id/version/latest` - same

- `:type/:id/version/:version/` - `components/contacts/0.2.1/`
- `:type/:id/version/?eq=version` - `components/contacts/version?eq=0.2.1`
- `:type/:id/version/?gt=version` - `components/contacts/version?gt=1.0` - all versions > 1.0
- `:type/:id/version/?lt=version` - `components/contacts/version?lt=1.0` - all versions < 1.0
- `:type/:id/version/?lt=v1&gt=v2` - `components/contacts/version?lt=2.0&gt1.0` - all versions between 1.0 and 2.0

### Search API

- `:type?q=query` - `components?q=auth+password`

### Keyword search

- `:type/keywords/q=auth&q=password` - find artefacts of type where `keywords` matches `auth` or `password` 

### Status search

- `:type/status?eq=rc` - find release candidates
- `:type/status?lt=release` - find less than releases status
- `:type/status?gt=alpha` - find greater than alpha

### Rating search

- `:type/rating/eq=4` - find artefacts rated 4.x, ie. from 4.0 to 4.999
- `:type/rating/gt=3` - find artefacts rated 3 or higher
- `:type/rating/lt=2` - find artefacts rated 2 or lower

*Query params*

`q` - text query
`eq` specific number
`gt` greater than
`lt` less than

*Dots in URL path*

Doesn't work: `http://domain.com/aspnet/CLR4.0`
Does work: `http://domain.com/aspnet/CLR4.0/`