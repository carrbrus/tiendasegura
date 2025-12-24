const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');


// Public: list & get
router.get('/', controller.getListProducts);
router.post('/create', controller.createProduct);

module.exports = router;