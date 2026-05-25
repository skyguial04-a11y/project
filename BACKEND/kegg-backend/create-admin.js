/**
 * K-Egg Admin Account Creator
 * Run with: node create-admin.js
 *
 * Edit the adminAccounts array below to add your admin users.
 * Passwords are automatically hashed before saving.
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Admin    = require('./models/Admin');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://K-eggDB:MAYSAN@cluster0.ydqpgie.mongodb.net/kegg_db?retryWrites=true&w=majority';

// ── ADD YOUR ADMIN ACCOUNTS HERE ────────────────────────────
// Roles: 'superadmin' | 'admin' | 'staff'
const adminAccounts = [
    {
        username: 'kegg_admin',
        password: 'Kegg@2026!',   // ← change this to your preferred password
        role:     'superadmin'
    },
    // Add more admins below if needed:
    // {
    //     username: 'staff1',
    //     password: 'Staff@123',
    //     role:     'staff'
    // },
];
// ────────────────────────────────────────────────────────────

async function createAdmins() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        for (const account of adminAccounts) {
            const existing = await Admin.findOne({ username: account.username });

            if (existing) {
                console.log(`⚠️  Admin "${account.username}" already exists — skipped.`);
                continue;
            }

            const admin = new Admin(account);
            await admin.save();
            console.log(`✅ Created admin: "${account.username}" (role: ${account.role})`);
        }

        console.log('\n🎉 Done! You can now log in to the admin panel.');
        console.log('   URL: admin-login.html');

    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        await mongoose.disconnect();
    }
}

createAdmins();
