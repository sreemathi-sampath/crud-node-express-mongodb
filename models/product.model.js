const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            default: 0,
            required: true
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;


// curl --location 'http://localhost:3000/api/products' \
// --header 'Content-Type: application/json' \
// --data '{"name":"sree",
// "price":0,
// "quantity":22 }'