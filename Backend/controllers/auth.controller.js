const User =require (`../models/User`)

const registrar =async(peticion, respuesta) =>{
    try{
        // const nombre = peticion.body.nombre
        // const email = peticion.body.email
        // const password = peticion.body.password

        const {nombre, email, password } = peticion.body

        let user = new User({
            nombre,
            email,
            password
        })
        await user.save()

        return respuesta.status(201).json({
            msg: `el usuario fue creado`
        })
        

    }catch(error){
        return respuesta.status(500).json({
            msg: `error al registrar usuario ${ error.message}`
        } )
    }
}

const login =async(peticion, respuesta) =>{
    try{

    }catch(error){
        return respuesta.status(500).json({
            msg: `error al iniciar usuario ${ error.message}`
        } )
    }
}

module.exports = {
    registrar, 
    login
}