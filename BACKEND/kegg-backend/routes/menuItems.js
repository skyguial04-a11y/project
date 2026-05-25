const express  = require('express');
const router   = express.Router();
const MenuItem = require('../models/MenuItem');

// GET /api/menu-items — customer view (available only)
// GET /api/menu-items?admin=true — admin view (all items)
router.get('/', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const filter  = isAdmin ? {} : { status: 'available' };
        const items   = await MenuItem.find(filter).sort({ category: 1, name: 1 });
        res.status(200).json({ success: true, items });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// POST /api/menu-items — create new item (admin)
router.post('/', async (req, res) => {
    try {
        const item = new MenuItem(req.body);
        await item.save();
        res.status(201).json({ success: true, item });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// PUT /api/menu-items/:id — replace item (admin)
router.put('/:id', async (req, res) => {
    try {
        const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).json({ success: false, message: 'Item not found.' });
        res.status(200).json({ success: true, item });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// PATCH /api/menu-items/:id — partial update: status, stock, etc. (admin)
router.patch('/:id', async (req, res) => {
    try {
        const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ success: false, message: 'Item not found.' });
        res.status(200).json({ success: true, item });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// No DELETE endpoint — soft delete only via PATCH { status: 'unavailable' }

module.exports = router;
