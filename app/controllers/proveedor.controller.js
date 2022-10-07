const Proveedor = require("../models/proveedor.model");
const uploadFile = require("../middlewares/upload.middlewares");
/*CRUD de proveedores hacemos referencia al modelo*/
const proveedores = {

  uploadFile: function(req, res) {
        // POST insertar proveedores
        const provee = new Proveedor({
          name_proveedor: req.body.name_proveedor,
          email: req.body.email,
          contacto: req.body.contacto,
          address: req.body.address,
          city: req.body.city,
          file: req.body.file
        });
        
        provee.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
        };
        res.send({ message: "El proveedor se ha registrado correctamente!" });

          
      
          if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
          }
      
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });

        })
    },

  // GET get all Proveedores
  getProveedores: function (req, res) {
    Proveedor.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error occurred while retrieving proveedores.",
        });
      });
  },
  // GET (obtener) uno por el id
  getProveedoresById: function (req, res) {
    const id = req.params.id;
    Proveedor.findById(id)
      .then((data) => {
        if (!data)
          res.status(404).send({
            message: "Proveedor with id " + id + " is not found.",
          });
        else res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Error occured while retrieving Proveedor with id " + id,
        });
      });
  },
  // PUT update Proveedor by id
  updateProveedor: function (req, res) {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const id = req.params.id;

    Proveedor.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Failed to update Proveedor with id=${id}.`,
          });
        } else
          res.send({
            message: "Proveedor was updated successfully.",
          });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error occured while updating Proveedor with id=" + id,
        });
      });
  },
  // DELETE delete Proveedor by id
  deleteProveedor: function (req, res) {
    const id = req.params.id;

    Proveedor.deleteOne({
      _id: id,
    })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Failed to delete Proveedor with id=${id}.`,
          });
        } else
          res.send({
            message: "Proveedor was deleted successfully.",
          });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error occured while deleting Proveedor with id=" + id,
        });
      });
  },
  // DELETE remove all Proveedores
  deleteAllProveedores: function (req, res) {
    Proveedor.deleteMany({})
      .then((data) => {
        res.send({
          message: "All Proveedores was deleted successfully.",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error occured while deleting all Proveedores",
        });
      });
  },
};

module.exports = proveedores;
