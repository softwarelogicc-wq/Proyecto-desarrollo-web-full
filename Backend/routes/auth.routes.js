const express =require (`express`)
const router = express.Router()

// //sintaxis de desestrucuracion

const { registrar, login  } =require(`../controllers/auth.controller`)

router.post(`/registrar`, registrar)

module.exports = router