test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/artefacts/components/item/*.spec.js

.PHONY: test