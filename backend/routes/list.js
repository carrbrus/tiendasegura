const express = require('express');
const router = express.Router();
const controller = require('../controllers/listController');

// Public: list & get
router.get('/', controller.getList);

module.exports = router;