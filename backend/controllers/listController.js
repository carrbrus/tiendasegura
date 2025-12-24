const List = require('../models/list');
const Product = require('../models/product');

async function getList(req, res, next) {
  try {
    const lists = await List.find().exec();

    const listsWithCorrectPrice = await Promise.all(
      lists.map(async (list) => {
        const products = await Product.find({
          _id: { $in: list.products }
        });

        const totalPrice = products.reduce(
          (sum, product) => sum + product.price,
          0
        );

        return {
          ...list.toObject(),
          price: Number(totalPrice.toFixed(2)) 
        };
      })
    );

    res.json(listsWithCorrectPrice);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getList
};
