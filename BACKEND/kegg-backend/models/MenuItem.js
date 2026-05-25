const mongoose = require('mongoose');

const VariationSchema = new mongoose.Schema({
    label:         { type: String, required: true },
    type:          { type: String, enum: ['size', 'addon'], required: true },
    priceModifier: { type: Number, default: 0, min: 0 }
}, { _id: false });

const MenuItemSchema = new mongoose.Schema({
    name: {
        type:     String,
        required: true,
        trim:     true
    },
    category: {
        type:     String,
        required: true,
        enum:     ['rice bowls', 'sides', 'sandwiches', 'drinks', 'ramen', 'snacks']
    },
    description: {
        type:    String,
        default: ''
    },
    price: {
        type:     Number,
        required: true
    },
    stock: {
        type:    Number,
        default: 50
    },
    imagePath: {
        type:    String,
        default: ''
    },
    status: {
        type:    String,
        enum:    ['available', 'unavailable', 'out of stock'],
        default: 'available'
    },
    variations: {
        type:    [VariationSchema],
        default: []
    },
    orderCount: {
        type:    Number,
        default: 0
    }
}, {
    timestamps: true,
    collection: 'menuitems'
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
