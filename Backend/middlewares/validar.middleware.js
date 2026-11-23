const {validationResult } = require(`express-validator`)  /* esta validationResult va a atrapar un error y se lo muestra al usuario*/

module.exports = (peticion, respuesta, siguiente) =>{
    const errores = validationResult(peticion)

    if(!errores.isEmpty()){
        return respuesta.status(400).json({
            msg: errores.array()
        })
    }
}