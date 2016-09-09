test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/artefacts/file-io.spec.js

.PHONY: test