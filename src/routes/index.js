const router = require("express").Router();

const Dashboard = require("./Dashboard.routes");
const Inmuebles = require("./Inmueble");
const Ofertas = require("./Offers");
const Proveedores = require("./proveedores");
const Usuario = require("./users");
const Imgs = require("./img.routes");

router.use("/dashboard", Dashboard);
router.use("/ofertas", Ofertas);
router.use("/inmuebles", Inmuebles);
router.use("/proveedores", Proveedores);
router.use("/usuarios", Usuario);
router.use("/img", Imgs);

module.exports = router;
