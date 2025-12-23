const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const catalogSchema = new Schema(
    {
        products: [{ type: Types.ObjectId, ref: 'Product' }],
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const Catalog = model('Catalog', catalogSchema);

module.exports = Catalog;