# Mongoose Schemas

Schemas are defined using simple Javascript objects. This makes it easy to extend/override Schemas
by simply merging on top using `Object.assign` or lodash deep merge: `_.merge`.

Most artefact schemas use the same basic artefact-schema and only differ slightly on what constitutes a version.

## Source code artefacts
Artefacts such as *Apps* and *Components* link to a git repo which contain the actual source code.

## Virtual artefacts
Artefacts such as *Addons*, *Plugins* and *Libs* contain only metadata used to define how to install and configure that
artefact in a project. 