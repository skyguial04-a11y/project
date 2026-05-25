const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    username: {
        type:     String,
        required: true,
        unique:   true,
        trim:     true
    },
    password: {
        type:     String,
        required: true
    },
    role: {
        type:    String,
        enum:    ['superadmin', 'admin', 'staff'],
        default: 'admin'
    },
    isActive: {
        type:    Boolean,
        default: true
    }
}, {
    timestamps: true,
    collection: 'admins'
});

// Hash password before saving
AdminSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('Admin', AdminSchema);
