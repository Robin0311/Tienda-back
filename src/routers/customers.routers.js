const { Router } = require("express");
const router = Router();
// const auth = require('./../middlewares/authorization')
const { getCustomers,createCustomer, updateCustomers, deleteCustomers, loginCustomer } = require('../controllers/customers.controllers')

// localhost:5000/customers
router.get("/", getCustomers);
// router.get("/", auth, getCustomers); lleva auth para autoriacion
// localhost:5000/customers
router.post("/", createCustomer);

// localhost:5000/customers/login
router.post("/login", loginCustomer);


// localhost:5000/customers/{id}
router.put("/:id", updateCustomers);
// localhost:5000/customers/{id}
router.delete("/:id", deleteCustomers);

module.exports = router;
