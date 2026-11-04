const express = require('express')
const router = express.Router()
const controladorPrueba = require('./../controllers/prueba.controller') 

router.get('/prueba', controladorPrueba)

module.exports = router