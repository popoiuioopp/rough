package main

import (
	"github.com/labstack/echo/v4"
	"github.com/popoiuioopp/rough/handler"
)

func main() {
	app := echo.New()

	handler := handler.Handler{}

	app.Static("/static", "static")

	app.GET("/", handler.LanderHandler)

	app.Start(":3000")
}
