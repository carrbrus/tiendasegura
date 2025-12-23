const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const shop = new Schema(
    {
        name: { type: String, required: true, trim: true },
        address: { type: String, trim: true, default: '' },
        isActive: { type: Boolean, default: true },
        shopOwner: { type: Types.ObjectId, ref: 'ShopOwner', required: true },
        catalog: { type: Types.ObjectId, ref: 'Catalog', required: true },
    },
    { timestamps: true }
);
const Shop = model('Shop', shop);
module.exports = Shop;