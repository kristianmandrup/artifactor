test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/adapters/db/mongo/models/component.spec.js

.PHONY: test