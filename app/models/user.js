const mongoose = require("mongoose");
/*Esta es una instancia de mongo*/
const User = mongoose.model(
  "User", /*Creando un esquema de tipo usuario y tenemos un objeto json*/
  new mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);
/*linea 13 hace referenica al role.js en el que se encuentra otro modelo*/
module.exports = User;