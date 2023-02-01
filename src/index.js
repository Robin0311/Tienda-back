require('dotenv'). config()
const express = require('express')
const app = express()
app.listen( process.env.PORT, () =>
{
    console.log('\x1b[34m *********************************************** \x1b[0m')
    console.log('\x1b[34m ***************Se levanto la API*************** \x1b[0m')
    console.log('\x1b[34m *********************************************** \x1b[0m')
})

// localhost:5000
app.get('/', (req, res) =>{
    res.send('Hola Mundo')
})

//Colecciones
//Customers