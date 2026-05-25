const express = require('express');
const router  = express.Router();
const Order   = require('../models/Order');

// POST /api/orders — place a new order
router.post('/', async (req, res) => {
    try {
        const {
            ref, customer, items,
            subtotal, customization, processing, total,
            paymentMethod, pickupDate, pickupTime, notes
        } = req.body;

        // Basic validation
        if (!ref || !customer?.name || !customer?.phone || !items?.length) {
            return res.status(400).json({
                success: false,
                message: 'Missing required order fields.'
            });
        }

        const order = new Order({
            ref, customer, items,
            subtotal, customization, processing, total,
            paymentMethod, pickupDate, pickupTime, notes
        });

        await order.save();

        res.status(201).json({
            success: true,
            message: 'Order placed successfully!',
            orderId: order._id,
            ref:     order.ref
        });

    } catch (err) {
        // Duplicate ref (shouldn't happen but just in case)
        if (err.code === 11000) {
            return res.status(409).json({ success: false, message: 'Duplicate order reference.' });
        }
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET /api/orders — get all orders (admin use)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, orders });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// PATCH /api/orders/:id/status — advance order status (admin use)
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ['Pending', 'Preparing', 'Ready', 'Completed', 'Cancelled'];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status value.' });
        }

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!order) return res.status(404).json({ success: false, message: 'Order not found.' });

        res.status(200).json({ success: true, order });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
