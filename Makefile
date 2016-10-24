test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/validator/create.spec.js

.PHONY: test