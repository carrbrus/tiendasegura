const List = require('../models/list');

async function getList(req, res, next) {
  try {
    // traer todos los listas
    const lists = await List.find().exec();
    res.json(lists);
  } catch (err) {
    next(err);
  } 
};
module.exports = {
  getList,
};