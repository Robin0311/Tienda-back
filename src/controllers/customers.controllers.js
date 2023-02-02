const Customer = require('../models/customerSchema')
const { msgFormatConst, resApi } = require("../helpers/helpers");

const getCustomers = async(req, res) => {

  try {
  const Customers = await Customer.find({})
  msgFormatConst("getCustomers");
  resApi(res, 'success', Customers)
  } catch {
  msjPError("Error en la consulta");
  }

};

const createCustomer = async (req, res) => {

  try {
  const newCustomer = await Customer.create(req.body)
  msgFormatConst("createCustomer");
  resApi(res, 'success', newCustomer)
  } catch {
    msjPError("Error en la consulta");
  }
  
};

const updateCustomers = async(req, res) => {

  const {nombre, email} = req.body

  try {
    const updateCustomer = await Customer.findByIdAndUpdate(req.user.id, { nombre, email  }, { new: true })
		res.json(updateCustomer)
    } catch (error) {
      res.status(500).json({
        msg: 'Hubo un error actualizando la Usuario',
      })
    }
    
};

const deleteCustomers = (req, res) => {
  res.send("Estoy delete un usuario");
  msgFormatConst("deleteCustomers");
};

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomers,
  deleteCustomers,
};
