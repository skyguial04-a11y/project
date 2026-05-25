const express = require('express');
const router  = express.Router();
const User    = require('../models/User');

// GET /api/customers — list all registered users (admin)
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
            .select('-password')   // never send passwords
            .sort({ createdAt: -1 });

        res.status(200).json({ success: true, customers: users });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET /api/customers/count — quick count for dashboard
router.get('/count', async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.status(200).json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
