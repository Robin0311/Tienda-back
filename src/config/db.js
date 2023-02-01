require('dotenv').config()
const mongosse = require("mongoose")

const dbConnection = async () => {
    try {
        await mongosse.connect('mongodb://bryan9203:delfomer123@ac-cxqsojl-shard-00-00.eiimizm.mongodb.net:27017,ac-cxqsojl-shard-00-01.eiimizm.mongodb.net:27017,ac-cxqsojl-shard-00-02.eiimizm.mongodb.net:27017/DB_test?replicaSet=atlas-zxks8t-shard-0&ssl=true&authSource=admin')
        console.log("Conexion exitorsa a la BD")
    } catch (e) {
        console.log("Error en la conexion a la BD")
    }
}

module.exports = { dbConnection}