const mongoose = require('mongoose');

const PromoSchema = new mongoose.Schema({
    title:       { type: String, required: true },
    description: { type: String, required: true },
    imagePath:   { type: String, default: '' },
    validUntil:  { type: String, default: 'No Limit' },
    isActive:    { type: Boolean, default: true }
}, {
    timestamps: true,
    collection: 'promos'
});

module.exports = mongoose.model('Promo', PromoSchema);
