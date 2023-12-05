// const { CategoriaModel } = require("../models/Proveedores/categoria.models")
// const { ProveedoresModels } = require("../models/Proveedores/provedores.models")
// const { ServicioModels } = require("../models/Proveedores/servicios.models")

// class Dashboard {
//     async Grafics_Get (req,res,next){
//         try {
//             const categoria = await CategoriaModel.find()
//             const servicios = await ServicioModels.find()
//             const proveedor = await ProveedoresModels.find()
               


//             res.status(200).send('hola')
//         } catch (error) {
//             console.log(error)
//             return res.status(500).send('Error al obtener los datos')
//         }
//     }
// }
// module.exports = {Dashboard}


const { InmuebleModels } = require("../models/Inmueble/inmueble.models")
const { CategoriaModel } = require("../models/Proveedores/categoria.models")
const { ProveedoresModels } = require("../models/Proveedores/provedores.models")
const { ServicioModels } = require("../models/Proveedores/servicios.models")
const {OffersModel}=require("../models/Offers/offers.model")
const {OffersStatus_Model} = require("../models/Offers/OfferStatus")

class Dashboard {
    async Grafics_Get(req, res, next) {
        try {
            console.log('entre')
            const categorias = await CategoriaModel.find()
            console.log('Categoria listo')
            const servicios = await ServicioModels.find()
            console.log('servicio listo')
            const proveedores = await ProveedoresModels.find()
            console.log('Proveedores listo')
            const inmuebles = await InmuebleModels.find()
            console.log('inmuebles listo')
            const offers = await OffersModel.find()
            console.log('inmuebles oferttaslisto')
            const offersStatus = await OffersStatus_Model.find()
            

            // Crear un objeto con los datos obtenidos
            const data = {
                categorias: categorias,
                servicios: servicios,
                proveedores: proveedores,
                inmuebles:inmuebles,
                offers: offers,
                offersStatus:offersStatus
            };

            // Enviar el objeto como respuesta en formato JSON
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Error al obtener los datos');
        }
    }
}

module.exports = { Dashboard }
