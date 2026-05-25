const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    name:     { type: String, required: true },
    price:    { type: Number, required: true },
    quantity: { type: Number, required: true },
    img:      { type: String, default: '' }
}, { _id: false });

const OrderSchema = new mongoose.Schema({
    ref: {
        type:    String,
        required: true,
        unique:  true
    },
    customer: {
        name:  { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, default: 'N/A' }
    },
    items:          { type: [OrderItemSchema], required: true },
    subtotal:       { type: Number, required: true },
    customization:  { type: Number, default: 15 },
    processing:     { type: Number, default: 11 },
    total:          { type: Number, required: true },
    paymentMethod:  {
        type:    String,
        enum:    ['Cash', 'GCash'],
        default: 'Cash'
    },
    pickupDate:     { type: String, required: true },
    pickupTime:     { type: String, required: true },
    notes:          { type: String, default: 'None' },
    status: {
        type:    String,
        enum:    ['Pending', 'Preparing', 'Ready', 'Completed', 'Cancelled'],
        default: 'Pending'
    }
}, {
    timestamps: true,
    collection: 'orders'
});

module.exports = mongoose.model('Order', OrderSchema);
