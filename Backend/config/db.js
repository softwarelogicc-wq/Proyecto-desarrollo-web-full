const mongoose = require (`mongoose`) /*debemos instalar el npm i mongose*/


const MONGO_URI = process.env.MONGO_URI

const dbconnection = async() => {
    try{
        await mongoose.connect(MONGO_URI)        
        console.log(`base de datos conectada`)
    } catch(error){
        console.log(`error conectandose a la base de datos`, error.message)
    }
}

module.exports = dbconnection