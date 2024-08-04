run: 
	@templ generate
	@go run cmd/main.go

watch-templ:
	@templ generate --watch --proxy="http://localhost:3000" --cmd="go run cmd/main.go" --open-browser=false

tailwind-watch:
	@tailwindcss -i ./static/css/input.css -o static/css/output.css --watch

tailwind:
	@tailwindcss -i ./static/css/input.css -o static/css/output.css

watch:
	@trap 'kill 0' SIGINT; \
	make watch-templ & \
	make tailwind-watch & \
	wait
