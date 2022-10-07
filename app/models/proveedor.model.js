const mongoose = require("mongoose");

const Proveedor = mongoose.model(
  "Proveedor",
  new mongoose.Schema({
    name_proveedor: String,
    email: String,
    contacto: String,
    address: String,
    city: String,
    file: String
  })
);

module.exports = Proveedor;