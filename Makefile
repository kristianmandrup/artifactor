test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/sandbox/dsl-test.spec.js

.PHONY: test