test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/adapters/fake/component.spec.js

.PHONY: test