const express =require (`express`)
const router = express.Router()
const { validacionRegistrar } = require(`./../validators/auth.validator`) /*aca debemos desestruturar la funcion en validator para poder llamar la funcion validacionRegistrar*/
const validador =require(`./../middlewares/validar.middleware`) /* aca debemos mandar una contante directa para llamar al validador desde middleware*/

// //sintaxis de desestrucuracion

const { registrar, login  } =require(`../controllers/auth.controller`)

router.post(`/registrar`, validador, registrar)   /*las validaciones deben ir antes de que ingrese al controlador para evitar el gasto de recursos*/

module.exports = router