const { Router } = require("express");
const router = Router();
const { getProduct,createProduct,updateProduct,deleteProduct } = require('../controllers/product.controllers')

// localhost:5000/product
router.get("/", getProduct);

// localhost:5000/product
router.post("/", createProduct);

// localhost:5000/product/id
router.put("/:id", updateProduct);

// localhost:5000/product/id
router.delete("/:id", deleteProduct);

module.exports = router;
