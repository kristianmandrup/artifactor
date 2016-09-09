test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/artefacts/json-io.spec.js

.PHONY: test