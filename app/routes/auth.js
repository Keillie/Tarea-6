const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth");

module.exports = function(app) {
  /*Valida que no este repetido el usuario y el correo */
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);
};