const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');


// Public: list & get
router.get('/', controller.getListProducts);
router.post('/create', controller.createProduct);
// Agregar al catálogo
router.post('/:catalogId/add-to-catalog/:productId', controller.addToCatalog);

// Agregar a la lista
router.post('/:listId/add-to-list/:productId', controller.addToList);
router.get('/:id', controller.getProduct);


module.exports = router;