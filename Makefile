test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/validator/remove.spec.js

.PHONY: test