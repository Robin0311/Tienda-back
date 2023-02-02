const { msgFormatConst, resApi, msjPError  } = require("../helpers/helpers");
const Shopping = require('../models/shoppingSchema')

const getShopping = async(req, res) => {
  try {
    const Shoppings = await Shopping.find({})
    msgFormatConst("getShopping");
    resApi(res, 'success', Shoppings)
    } catch {
    msjPError("Error en la consulta");
    }
};

const createShopping = async(req, res) => {
  const ShoppingNew = await Shopping.create(req.body)
  res.json(ShoppingNew)
  msgFormatConst("createShopping");
};

module.exports = {
  getShopping,
  createShopping
};