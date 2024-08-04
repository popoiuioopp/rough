run: 
	@templ generate
	@go run cmd/main.go

templ-watch:
	@templ generate --watch --proxy="http://localhost:3000" --cmd="go run cmd/main.go" --open-browser=false

tailwind-watch:
	@npm run build-tailwind -- --watch

tailwind:
	@npm run build-tailwind

watch:
	@trap 'kill 0' SIGINT; \
	make templ-watch & \
	make tailwind-watch & \
	wait
