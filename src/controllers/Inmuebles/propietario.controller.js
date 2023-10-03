const { ObjectId } = require("mongodb");

const {
  PropietarioModels,
} = require("../../models/Inmueble/propietario.models");
const {InmuebleModels} = require("../../models/Inmueble/inmueble.models")
class propietarioController {
  getPropietario(req, res, next) {
    PropietarioModels.find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: "Error al obtener propietarios" , err: error.message });
      })
      .finally(() => next());
  }
  async getIdPropietario(req, res, next) {
    const id = req.params.id;
    try {
      const result = await PropietarioModels.findOne({
        _id: new ObjectId(id),
      });
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("No se encontro ningun coso en el ID ingresado ");
      }
    } catch (error) {
      console.log("error" + error);
    } finally {
      next();
    }
  }
  postPropietario(req, res, next) {
    const result = new PropietarioModels(req.body);
    result
      .save()
      .then((result) => res.status(201).json(result))
      .catch((error) =>
        res.status(500).json({
          error: "Error al injectar un propietario ", err: error.message
        })
      )
      .finally(() => next());
  }

  async putPropietario(req, res, next) {
    
    const id = req.params.id;

    try {
      const result = await PropietarioModels.findOneAndUpdate(
        { _id: new ObjectId(id) },
        req.body,
        { new: true }
      );
      if (result) {
        res.status(200).json({ melo: "Documnto actualizado ", result });
      } else {
        res.status(500).json({ error: "Error al actualizar" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      next();
    }
  }

  async deletePropietario(req, res, next) {
    const id = req.params.id;

    try {
      const reference = await InmuebleModels.find({
        id_propietario: new ObjectId(id),
      });
      console.log(reference);
      if (reference.length > 0) {
        res.status(500).send({
          error:
            "No se puede eliminar este documento, ya que se utiliza en otra parte.",
        });
      } else {
        const result = await PropietarioModels.findOneAndDelete({
          _id: new ObjectId(id),
        });
        res.status(200).send({ message: "Borrado con éxito", Result: result });
      }
    } catch (error) {
      console.log("Error al eliminar el documento -> " + error.message);
      res.status(500).send({
        error: "error.",
      });
    } finally {
      next();
    }
  }
}
module.exports = { propietarioController };
