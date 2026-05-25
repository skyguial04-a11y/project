// ── Force Google DNS to bypass restrictive network DNS servers ─
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const authRoutes      = require('./routes/auth');
const orderRoutes     = require('./routes/orders');
const customerRoutes  = require('./routes/customers');
const adminRoutes     = require('./routes/admin');
const menuItemRoutes  = require('./routes/menuItems');

const app = express();

// ── CORS 
// Allow requests from any origin in development.
// In production, replace '*' with your actual frontend domain:
//   e.g. 'https://kegg.netlify.app'
const allowedOrigins = process.env.FRONTEND_URL
    ? [process.env.FRONTEND_URL]
    : ['http://localhost:5500', 'http://127.0.0.1:5500', 'http://localhost:3000'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (e.g. mobile apps, curl, Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));

app.use(express.json());

// ── MongoDB connection ─────────────────────────────────────────
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://K-eggDB:MAYSAN@cluster0.ydqpgie.mongodb.net/kegg_db?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(() => console.log('✅ Connected to MongoDB:', mongoURI.includes('localhost') ? 'Local' : 'Atlas'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));

// ── Routes ────────────────────────────────────────────────────
app.use('/api/auth',       authRoutes);
app.use('/api/orders',     orderRoutes);
app.use('/api/customers',  customerRoutes);
app.use('/api/admin',      adminRoutes);
app.use('/api/menu-items', menuItemRoutes);

// Health check — visit http://localhost:5000/api/health to verify
app.get('/api/health', (req, res) => {
    res.json({
        status:      'ok',
        environment: process.env.NODE_ENV || 'development',
        db:          mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        dbType:      mongoURI.includes('localhost') ? 'local' : 'atlas'
    });
});

// ── Start server ──────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`   Health check: http://localhost:${PORT}/api/health`);
});
