// se debe llamar a una variable de destructuracion don de llamamos al body despues debemos requerir a express validator

const {body } = require(`express-validator`)

// debemos poner un arrary donde llamamos al body para poder sacar los campos que vamos a validar

const validacionRegistrar = [
    body(`nombre`)
        .notEmpty().withMessage(`Este campo es obligatorio`)
]

module.exports = {
    validacionRegistrar
}