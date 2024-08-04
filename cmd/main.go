package main

import (
	"os"

	"github.com/labstack/echo/v4"
)

func main() {
	app := echo.New()

	app.Static("/static", "static")

	port := os.Getenv("PORT")

	app.Logger.Fatal(app.Start(port))
}
