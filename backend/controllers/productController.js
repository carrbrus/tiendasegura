const Product = require('../models/product');
async function createProduct(req, res, next) {
  try {
    const payload = req.body;
    const product = await Product.createProduct(payload);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}
async function getProduct(req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).exec();
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
}
async function getListProducts(req, res, next) {
    try {
    const list = await Product.find().exec();
    res.json(list);
    } catch (err) {
      next(err);
    }
}

module.exports = {
  createProduct,
  getProduct,
  getListProducts,
};