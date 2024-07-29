package main

import (
	"github.com/labstack/echo/v4"
	"github.com/popoiuioopp/rough/handler"
)

func main() {
	app := echo.New()

	userHandler := handler.UserHandler{}

	app.GET("/user", userHandler.UserShowHandler)

	app.Static("/static", "static")

	app.Start(":3000")
}
