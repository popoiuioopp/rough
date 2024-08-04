package handler

import (
	"github.com/labstack/echo/v4"
	landerView "github.com/popoiuioopp/rough/view/lander"
)

type Handler struct {
}

func (h Handler) LanderHandler(c echo.Context) error {
	return render(c, landerView.LanderPage())
}
