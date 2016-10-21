test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/adapters/fake/faker/generator.spec.js

.PHONY: test