const { msgFormatConst, resApi, msjPError, msjP } = require("../helpers/helpers");
const Product = require('../models/productSchema')

const getProduct = async(req, res) => {
  try {
    const Products = await Product.find({})
    msgFormatConst("getProduct");
    resApi(res, 'success', Products)
    } catch {
    msjPError("Error en la consulta");
    }
};

const createProduct = async(req, res) => {
  const ProductNew = await Product.create(req.body)
  res.json(ProductNew)
  msgFormatConst("createProduct");
};

const updateProduct = async(req, res) => {
    try {
      const resp = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      
        return res.json({
          message: 'Product updated successfully',
          detail: resp
        })
        
    } catch (e) {
      return res.json({
        message: 'Error',
        detail: e
      })
    }
  };

  const deleteProduct = async(req, res) => {
    try {
      msjP("Delete product");
      const product = await Product.findByIdAndDelete(req.params.id);
      resApi(res, "success", product);
    } catch {
      msjPError("Error Delete Product");
    }
  };

module.exports = {
    getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
