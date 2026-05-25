const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');
const User    = require('../models/User');

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
    try {
        const { username, phone, password } = req.body;

        // Validate required fields
        if (!username || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "Username, phone, and password are all required."
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters."
            });
        }

        // Check if username already exists
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ success: false, message: "Username already taken." });
        }

        // Check if phone already exists
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({ success: false, message: "Phone number already registered." });
        }

        const newUser = new User({ username, phone, password });
        await newUser.save();

        res.status(201).json({ success: true, message: "User registered successfully!" });

    } catch (err) {
        console.error("Signup error:", err.message);
        // Handle duplicate key error from MongoDB
        if (err.code === 11000) {
            const field = Object.keys(err.keyPattern)[0];
            return res.status(400).json({
                success: false,
                message: `That ${field} is already registered.`
            });
        }
        res.status(500).json({ success: false, error: err.message });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid username or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid username or password." });
        }

        res.status(200).json({ success: true, message: "Login successful!", user: { username: user.username } });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
