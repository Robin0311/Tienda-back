const { Router } = require("express");
const router = Router();
const { getShopping,createShopping } = require('../controllers/Shopping.controllers')

// localhost:5000/shopping
router.get("/", getShopping);
// localhost:5000/shopping
router.post("/", createShopping);


module.exports = router;
