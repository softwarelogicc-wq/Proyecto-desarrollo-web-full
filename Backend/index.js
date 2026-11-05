const express = require(`express`)
const app = express()

app.listen(3000, () => {
    try {
        
        console.log(`conexion existosa`)

    } catch(error) {
        console.error(`error de conexion`, error.message)

    }
})