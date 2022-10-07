const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
//se hace referencia con los modelos y se tiene una constante db
db.user = require("./user");
db.role = require("./role");
db.client = require("./client.model");
db.client = require("./proveedor.model");

//Roles preestablecidos, servicios basados en roles
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
