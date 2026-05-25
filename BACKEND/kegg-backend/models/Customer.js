const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name:        { type: String, required: true, trim: true },
    phone:       { type: String, required: true, unique: true },
    email:       { type: String, default: 'N/A' },
    ordersCount: { type: Number, default: 0 },
    totalSpent:  { type: Number, default: 0 },
    lastOrderAt: { type: Date,   default: null }
}, {
    timestamps: true,
    collection: 'customers'
});

module.exports = mongoose.model('Customer', CustomerSchema);
