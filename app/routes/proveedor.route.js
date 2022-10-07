/*Manejador de rutas */
const { authJwt } = require("../middlewares");
const controller = require("../controllers/proveedor.controller");

module.exports = function(app) {
  /*aqui manejo que algo sea publico o privado con [authJwt.verifyToken, authJwt.isAdmin] con este solo los admin sino lo tiene cualquiera con url puede acceder*/
  app.post("/api/proveedor/uploadFile", [authJwt.verifyToken, authJwt.isAdmin],[controller.uploadFile]);

  app.get("/api/proveedor/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.getProveedores]);

  app.get("/api/proveedor/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.getProveedoresById]);

  app.put("/api/proveedor/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.updateProveedor]);

  app.delete("/api/proveedor/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteProveedor]);

  app.delete("/api/proveedor/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteAllProveedores]);
  
};