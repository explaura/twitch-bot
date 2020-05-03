OAUTH_TOKEN ?= $(shell aws ssm get-parameter --name '/twitch/oauth-token' --with-decryption --query Parameter.Value --output text)

default: lint test
.PHONY: default

lint:
	npm run lint
.PHONY: lint

install:
	npm install
.PHONY: install

start:
	npm start
.PHONY: start
