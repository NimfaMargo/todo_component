install:
	npm install
publish:
	npm publish
develop:
	npx webpack-dev-server
build:
	rm -rf dist
	NODE_ENV=production npm run webpack
lint:
	npx eslint .
fix:
	npx eslint . --fix
test:
	npm test -s
