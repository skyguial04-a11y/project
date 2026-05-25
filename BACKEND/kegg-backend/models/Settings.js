const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
    storeName:      { type: String, default: 'K-Egg Maysan' },
    contactNumber:  { type: String, default: '0926 931 8611' },
    email:          { type: String, default: 'keggmaysanvalenzuela24@gmail.com' },
    address:        { type: String, default: '1665 R Funaki Bldg, Maysan Rd, Valenzuela, Metro Manila' },
    operatingHours: { type: String, default: 'Mon-Fri 7AM-6PM, Sat-Sun 8AM-10PM' },
    gcashName:      { type: String, default: 'K-EGG MAYSAN BR.' },
    gcashNumber:    { type: String, default: '0926 931 8611' },
    deliveryFee:    { type: Number, default: 0 },
    customizationFee: { type: Number, default: 15 },
    processingFee:  { type: Number, default: 11 }
}, {
    timestamps: true,
    collection: 'settings'
});

module.exports = mongoose.model('Settings', SettingsSchema);
