# Quick Command

export PORT=4500	# Fix run React in special PORT in Linux

# Deployment config
# Local:
export SOURCE_ROOT_DIR=${PWD}
export SOURCE_BUILD_DIR=${PWD}/build
export DEPLOYMENT_ROOT_DIR=${PWD}/scripts/reactjs-starter.local/htdocs
export DEPLOYMENT_DOMAIN=reactjs-starter.local
export DEPLOYMENT_DOMAIN_PORT=8800

env:
	@cp ./.env.example ./.env

init:
	@yarn

start:
	@yarn start

deploy:
	yarn build
	$(shell x-www-browser http://${DEPLOYMENT_DOMAIN}:${DEPLOYMENT_DOMAIN_PORT})
	