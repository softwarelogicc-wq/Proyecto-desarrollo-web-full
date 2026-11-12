const express = require(`express`)
const app = express()
const dotenv = require(`dotenv`)
const routerPrueba = require(`./routes/prueba.routes`)
const authRouter = require('./routes/auth.routes')



// configuracion de dotenv
dotenv.config()
const dbconnection = require(`./config/db`)

/*variable de entorno del puerto*/

const PUERTO = process.env.PUERTO   /*ESTAS CONSTANTES SON PARA LA CONEXION DE DOTENV TODO LO QUE ESTA EN .ENV*/

// funcion que conecta a la base de datos
dbconnection()

// configuracion de express obligatoria para poder usar las peticiones conrrectas

app.use(express.json())
app.use(`/api`, routerPrueba)
app.use(`/api`, authRouter)


// app.get('/api/pruebas', (peticion, respuesta) => {
//     respuesta.json({
//         msg: 'Prueba de traer informacion ejecutada'
//     })
// })


app.listen(PUERTO, () => {
    try {
        
        console.log(`conexion existosa al puerto`)

    } catch(error) {
        console.error(`error de conexion`, error.message)

    }
})