test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/faker/generator.spec.js

.PHONY: test