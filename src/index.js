require('dotenv'). config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())

app.use(cors())
const { dbConnection } = require('./config/db')
dbConnection()
app.listen( process.env.PORT, () =>
{
    console.log('\x1b[34m *********************************************** \x1b[0m')
    console.log('\x1b[34m *************Se levanto la API '+process.env.PORT+'************ \x1b[0m')
    console.log('\x1b[34m *********************************************** \x1b[0m')
})

// localhost:5000
app.get('/', (req, res) =>{
    res.send('Hola Mundo')
})

//Collecciones
//Customers
// localhost:5000/customers
app.use('/customers', require('../src/routers/customers.routers'))

//shopping
// localhost:5000/shopping
app.use('/shopping', require('../src/routers/shopping.routers'))

//product
// localhost:5000/product
app.use('/product', require('../src/routers/product.routers'))