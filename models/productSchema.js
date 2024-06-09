const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    ingredients: {
        type: [String], 
        required: true
    },
    rating: {
        type: {
            value: Number,
            reviewer: String,
            date: String,
            review: String,
            count: Number 
        },
        required: true
    }
});

const Products = mongoose.model('Products', productSchema);
module.exports = Products;
