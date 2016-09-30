test:

	@./node_modules/mocha/bin/mocha -t 2000 dist/test/artefacts/components/version/component-version.spec.js

.PHONY: test