test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/adapters/file-adapter.spec.js

.PHONY: test