const { msgFormatConst } = require("../helpers/helpers");

const getShopping = (req, res) => {
  res.send("Estoy leyendo un compra");
  msgFormatConst("getShopping");
};

const createShopping = (req, res) => {
  res.send("Estoy creando un compra");
  msgFormatConst("createShopping");
};

module.exports = {
  getShopping,
  createShopping
};
