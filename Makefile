run: 
	@templ generate
	@go run cmd/main.go

watch:
	@templ generate --watch --proxy="http://localhost:3000" --cmd="go run cmd/main.go" --open-browser=false

tailwind-watch:
	@tailwindcss -i input.css -o static/css/output.css --watch

tailwind:
	@tailwindcss -i input.css -o static/css/output.css