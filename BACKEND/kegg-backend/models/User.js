const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type:     String,
        required: true,
        unique:   true,
        trim:     true
    },
    phone: {
        type:     String,
        required: true
    },
    password: {
        type:     String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'SIGN-UP' // matches your existing MongoDB collection name
});

// Hash password before saving
UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', UserSchema);
