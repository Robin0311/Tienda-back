const Customer = require('../models/customerSchema')
const { msgFormatConst, resApi, msjPError, msjP } = require("../helpers/helpers");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    const { name, email, password } = req.body
    const salt = await bcryptjs.genSalt(10)
    const hasedPassword = await bcryptjs.hash(password, salt)
    const newCustomer = await Customer.create({
      name: name,
      email: email,
      password: hasedPassword
    })
    res.json({ msg: ' Usuario creado'})
    
    msgFormatConst("newCustomer");
    // resApi(res, 'success', newCustomer)
    } catch (error){
    resApi(res, 'error',{
    msg: error
    });
  }
  
};

const loginCustomer = async (req, res) => {
  try {
   const { email, password } = req.body
    let foundCustomer = await Customer.findOne({
      email: email
    })

    if (!foundCustomer) {
      return res.status(400).json({ msg : 'El cliente no esta resgistrado'})
    }

    const passSuccess = await bcryptjs.compare(password, foundCustomer.password)

    if (!passSuccess) {
      return await res.status(400).json({ msg : 'Password incorrecto'})
    }

    const payload = {
      user: {
        id: foundCustomer.id
      }
    }

    if(email && passSuccess){
      jwt.sign(payload, process.env.SECRET, { expiresIn: process.env.TIME_TOKEN },
        (error, token) =>{
          if(error) throw error
          res.json({token: token})
        })
    }

  } catch (error){
    resApi(res, 'error',{
    msg: error
    });
  }
}

const updateCustomers = async(req, res) => {
  try {
    const resp = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    
      return res.json({
        message: 'Customers updated successfully',
        detail: resp
      })
      
  } catch (e) {
    return res.json({
      message: 'Error',
      detail: e
    })
  }
};

const deleteCustomers = async(req, res) => {
  try {
    msjP("Delete product");
    const customers = await Customer.findByIdAndDelete(req.params.id);
    resApi(res, "success", customers);
  } catch {
    msjPError("Error Delete Product");
  }
};

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomers,
  deleteCustomers,
  loginCustomer
};
