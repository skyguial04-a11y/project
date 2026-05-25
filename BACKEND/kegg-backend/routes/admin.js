const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');
const Admin   = require('../models/Admin');

// POST /api/admin/login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'Username and password are required.' });
        }

        const admin = await Admin.findOne({ username, isActive: true });
        if (!admin) {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }

        // Return admin info (no password)
        res.status(200).json({
            success:  true,
            message:  'Login successful.',
            admin: {
                id:       admin._id,
                username: admin.username,
                role:     admin.role
            }
        });

    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// POST /api/admin/logout
router.post('/logout', (req, res) => {
    res.status(200).json({ success: true, message: 'Logged out.' });
});

module.exports = router;
