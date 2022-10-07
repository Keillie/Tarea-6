/*Manejador de rutas */
const { authJwt } = require("../middlewares");
const controller = require("../controllers/client.controller");

module.exports = function(app) {
  /*aqui manejo que algo sea publico o privado con [authJwt.verifyToken, authJwt.isAdmin] con este solo los admin sino lo tiene cualquiera con url puede acceder*/

 app.post("/api/client/registro", [authJwt.verifyToken, authJwt.isAdmin],[controller.registro]);

  app.get("/api/client/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.getClients]);

  app.get("/api/client/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.getClientsById]);

  app.put("/api/client/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.updateClient]);

  app.delete("/api/client/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteClient]);

  app.delete("/api/client/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteAllClients]);
  
};