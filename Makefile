# Quick Command

export PORT=4500	# Fix run React in special PORT in Linux

env:
	@cp ./.env.example ./.env

init:
	@yarn

start:
	@yarn start