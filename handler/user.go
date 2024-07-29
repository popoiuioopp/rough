package handler

import (
	"github.com/labstack/echo/v4"
	"github.com/popoiuioopp/rough/model"
	userView "github.com/popoiuioopp/rough/view/user"
)

type UserHandler struct {
}

func (h UserHandler) HandleUserShow(c echo.Context) error {

	user := model.User{
		Email: "bigge.gmail.com",
	}

	return render(c, userView.Show(user))
}
