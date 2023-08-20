const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productLink: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel;