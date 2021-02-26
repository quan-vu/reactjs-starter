# Quick Command

export PORT=4500	# Fix run React in special PORT in Linux

# Deployment config
# Local:
export ENV_SOURCE_ROOT_DIR=${PWD}
export ENV_HOST_NAME=reactjs-starter.local
export ENV_HOST_PORT=8800

env:
	@cp ./.env.example ./.env

init:
	@yarn

start:
	@yarn start

deploy:
	./deploy_apache.sh
	@yarn build
	@echo ""
	@echo ">> Success build project."
	@echo ">> Success deploy project at: http://${ENV_HOST_NAME}:${ENV_HOST_PORT}"
	@echo ""
	