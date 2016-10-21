test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/adapters/fake/faker/schemas/component.spec.js

.PHONY: test