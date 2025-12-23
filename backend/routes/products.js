const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');


// Public: list & get
router.get('/:id', controller.getProduct);
router.get('/', controller.getListProducts);

module.exports = router;