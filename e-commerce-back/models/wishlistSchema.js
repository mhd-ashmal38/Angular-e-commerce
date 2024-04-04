// wishlistSchema.js
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product' // Assuming 'Product' is the name of your product model
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Wishlists = mongoose.model('Wishlists', wishlistSchema);

module.exports = Wishlists;
