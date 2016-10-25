test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/faker/special/slugified.spec.js

.PHONY: test