test: build
	@mocha-phantomjs -R dot test/index.html

build: node_modules components lib/index.js
	@component build --dev

node_modules:
	@npm install

components:
	@component install --dev

clean:
	@rm -rf build

.PHONY: clean test