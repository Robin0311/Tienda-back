require('dotenv').config()
const mongosse = require("mongoose")
mongosse.set('strictQuery', false)
const dbConnection = async () => {
    try {
        await mongosse.connect(
            process.env.MONGODB_URL
        )
        console.log('\x1b[32m *********************************************** \x1b[0m')
        console.log('\x1b[32m *************Conexion exitosa de DB************ \x1b[0m')
        console.log('\x1b[32m *********************************************** \x1b[0m')
    } catch (e) {
        console.log('\x1b[31m *********************************************** \x1b[0m')
        console.log('\x1b[31m *************Error en la conexion a la BD************ \x1b[0m')
        console.log('\x1b[31m *********************************************** \x1b[0m')
    }
}

module.exports = { dbConnection}