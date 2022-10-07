const mongoose = require("mongoose");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    address: String,
    cui: String
  })
);

module.exports = Client;