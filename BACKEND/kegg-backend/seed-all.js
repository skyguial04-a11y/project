/**
 * K-Egg Full Database Seed Script
 * Seeds: menuitems, settings, promos
 * Run with: node seed-all.js
 */

require('dotenv').config();
const mongoose  = require('mongoose');
const MenuItem  = require('./models/MenuItem');
const Settings  = require('./models/Settings');
const Promo     = require('./models/Promo');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://K-eggDB:MAYSAN@cluster0.ydqpgie.mongodb.net/kegg_db?retryWrites=true&w=majority';

// ── MENU ITEMS ──────────────────────────────────────────────
const menuItems = [
    { name: "2pcs Chicken Wings w/ Rice",      category: "rice bowls",  price: 89,  stock: 50, imagePath: "images/chicken.jpg",          description: "Crispy wings with delightful flavors" },
    { name: "Bacon Rice Bowl",                  category: "rice bowls",  price: 119, stock: 50, imagePath: "images/baconricebowl.jpg",     description: "Savory bacon strips with rice" },
    { name: "Spam Rice Bowl",                   category: "rice bowls",  price: 119, stock: 50, imagePath: "images/spamricebowl.jpg",      description: "Sliced spam served with rice" },
    { name: "Ham Rice Bowl",                    category: "rice bowls",  price: 119, stock: 50, imagePath: "images/hamricebowl.jpg",       description: "Tender ham atop steamed rice" },
    { name: "Beef Bulgogi Rice Bowl",           category: "rice bowls",  price: 149, stock: 50, imagePath: "images/beefbulgogirice.jpg",   description: "Sweet savory beef over rice" },
    { name: "Spicy Beef Bulgogi Rice Bowl",     category: "rice bowls",  price: 149, stock: 50, imagePath: "images/spicybeeffrice.jpg",    description: "Fiery marinated beef with rice" },
    { name: "Pork Bulgogi Rice Bowl",           category: "rice bowls",  price: 149, stock: 50, imagePath: "images/porkbulgogirice.jpg",   description: "Traditional marinated pork over rice" },
    { name: "Spicy Pork Bulgogi Rice Bowl",     category: "rice bowls",  price: 149, stock: 50, imagePath: "images/spicyporkrice.jpg",     description: "Bold spicy pork with rice" },
    { name: "Fries",                            category: "sides",       price: 89,  stock: 50, imagePath: "images/fries.jpg",            description: "French fries with different flavors" },
    { name: "Classic Corndog",                  category: "sides",       price: 119, stock: 50, imagePath: "images/4 Ramyeon Corndogs.jpg", description: "Simple golden battered fried sausage" },
    { name: "Ramyeon Corndog",                  category: "sides",       price: 129, stock: 50, imagePath: "images/4 Ramyeon Corndogs.jpg", description: "Crunchy, ramen-coated golden fried sausage" },
    { name: "Potato Corndog",                   category: "sides",       price: 129, stock: 50, imagePath: "images/fries.jpg",            description: "Crispy potato coated sausage" },
    { name: "Mozzadog",                         category: "sides",       price: 139, stock: 50, imagePath: "images/chicken.jpg",          description: "Half mozzarella half sausage stick" },
    { name: "Mozzaspam Corndog",                category: "sides",       price: 149, stock: 50, imagePath: "images/3 Spam Sandwhich.jpg", description: "Fried mozzarella and spam stick" },
    { name: "Ramen",                            category: "ramen",       price: 169, stock: 50, imagePath: "images/ramen.jpg",            description: "Hot ramen with authentic taste" },
    { name: "Classic Toast Sandwich",           category: "sandwiches",  price: 109, stock: 50, imagePath: "images/egg sandwich.jpg",     description: "Fluffy egg sandwich" },
    { name: "Chicken Pesto Sandwich",           category: "sandwiches",  price: 159, stock: 50, imagePath: "images/3 Pork Bulgogi Sandwich.jpg", description: "Herbaceous chicken and egg fusion" },
    { name: "Ham Sandwich",                     category: "sandwiches",  price: 149, stock: 50, imagePath: "images/egg sandwich.jpg",     description: "Savory ham, fluffy egg brioche" },
    { name: "Bacon Sandwich",                   category: "sandwiches",  price: 149, stock: 50, imagePath: "images/baconricebowl.jpg",    description: "Smoky bacon with creamy eggs" },
    { name: "Beef Bulgogi Sandwich",            category: "sandwiches",  price: 169, stock: 50, imagePath: "images/3 Spicy Beef Bulgogi Sandwich.jpg", description: "Sweet, savory Korean beef bulgogi" },
    { name: "Spicy Beef Bulgogi Sandwich",      category: "sandwiches",  price: 169, stock: 50, imagePath: "images/3 Spicy Beef Bulgogi Sandwich.jpg", description: "Fiery, marinated Korean beef bulgogi" },
    { name: "Pork Bulgogi Sandwich",            category: "sandwiches",  price: 159, stock: 50, imagePath: "images/3 Pork Bulgogi Sandwich.jpg", description: "Traditional, tender pork bulgogi flavors" },
    { name: "Spicy Pork Bulgogi Sandwich",      category: "sandwiches",  price: 159, stock: 50, imagePath: "images/3 Spicy Pork Bulgogi Sandwich.jpg", description: "Bold, fiery pork bulgogi kick" },
    { name: "Chicken Katsu Sandwich",           category: "sandwiches",  price: 159, stock: 50, imagePath: "images/chicken.jpg",          description: "Crispy chicken cutlet with eggs" },
    { name: "Hot Coffee",                       category: "drinks",      price: 88,  stock: 50, imagePath: "images/hotcoffee.jpg",        description: "Hot coffee perfect for cold weather" },
    { name: "Fruity Drinks",                    category: "drinks",      price: 78,  stock: 50, imagePath: "images/drinks.jpg",           description: "Fruity drinks to ease the thirst" },
    { name: "Iced Caramel Macchiato",           category: "drinks",      price: 88,  stock: 50, imagePath: "images/carmacc.jpg",          description: "Espresso, milk, and sweet caramel" },
    { name: "Cafe Mocha",                       category: "drinks",      price: 88,  stock: 50, imagePath: "images/cafemocha.jpg",        description: "Rich chocolate meets espresso coffee" },
    { name: "Iced Chocolate",                   category: "drinks",      price: 88,  stock: 50, imagePath: "images/chocolate.jpg",        description: "Rich, creamy, chilled cocoa delight" },
    { name: "Matcha Latte",                     category: "drinks",      price: 88,  stock: 50, imagePath: "images/matchalatte.jpg",      description: "Earthy green tea, creamy milk" },
    { name: "French Vanilla",                   category: "drinks",      price: 88,  stock: 50, imagePath: "images/frenchvan.jpg",        description: "Smooth, creamy, classic vanilla bean" },
    { name: "Hazelnut Latte",                   category: "drinks",      price: 88,  stock: 50, imagePath: "images/haznutlatte.jpg",      description: "Nutty, aromatic coffee milk blend" },
    { name: "Cookies n' Cream Frappe",          category: "drinks",      price: 108, stock: 50, imagePath: "images/cncfrappe.jpg",        description: "Sweet, cookies, and cream frappe" },
    { name: "Ube Frappe",                       category: "drinks",      price: 108, stock: 50, imagePath: "images/ubefrap.jpg",          description: "Sweet, purple yam blended ice" },
    { name: "Salted Caramel Frappe",            category: "drinks",      price: 118, stock: 50, imagePath: "images/salcarfrappe.jpg",     description: "Sweet, salty, blended coffee treat" },
    { name: "Dark Choco Frappe",                category: "drinks",      price: 118, stock: 50, imagePath: "images/dcfrappe.jpg",         description: "Intense, rich, blended chocolate ice" },
    { name: "Java Chips Frappe",                category: "drinks",      price: 118, stock: 50, imagePath: "images/javachip.jpg",         description: "Coffee blend with chocolate bits" }
];

// ── PROMOS ──────────────────────────────────────────────────
const promos = [
    {
        title:       "Meryenda Bundle!",
        description: "Buy any K-Egg Sandwich and add ₱10 for a Large Milk Tea!",
        imagePath:   "images/b10promo.jpg",
        validUntil:  "March 31, 2026",
        isActive:    true
    },
    {
        title:       "Two Stacks, One Stronger Reason",
        description: "Buy 1 K-Egg Sandwich, Get the 2nd for 50% Off!",
        imagePath:   "images/buy1g50.jpg",
        validUntil:  "June 15, 2026",
        isActive:    true
    },
    {
        title:       "Budget Meal Promo",
        description: "Petsa de peligro? Student on a budget? Don't worry, we got you covered!",
        imagePath:   "images/bmp.jpg",
        validUntil:  "No Limit",
        isActive:    true
    },
    {
        title:       "Valentines Day Promo",
        description: "FREE Iced Coffee of your choice for every purchase of our egg drop sandwich, any flavor!",
        imagePath:   "images/vdaypromo.jpg",
        validUntil:  "February 14, 2026",
        isActive:    false
    },
    {
        title:       "Father's Day Promo",
        description: "Buy 1 K-Egg Sandwich, Get the 2nd at 50% Off!",
        imagePath:   "images/fdaypromo.jpg",
        validUntil:  "June 15, 2026",
        isActive:    true
    },
    {
        title:       "Flash Sale Every Friday!",
        description: "Get 25% OFF on all menu items every Friday from 3pm - 6pm.",
        imagePath:   "images/limitednote.png",
        validUntil:  "Every Friday",
        isActive:    true
    }
];

// ── SEED FUNCTION ────────────────────────────────────────────
async function seedAll() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        // 1. Menu Items
        await MenuItem.deleteMany({});
        const items = await MenuItem.insertMany(menuItems);
        console.log(`✅ menuitems    — ${items.length} products seeded`);

        // 2. Settings (upsert — only one document)
        await Settings.deleteMany({});
        await Settings.create({});
        console.log('✅ settings     — store settings seeded');

        // 3. Promos
        await Promo.deleteMany({});
        const insertedPromos = await Promo.insertMany(promos);
        console.log(`✅ promos       — ${insertedPromos.length} promos seeded`);

        console.log('\n🎉 All collections seeded! Open Compass to verify:');
        console.log('   kegg_db → menuitems  (36 products)');
        console.log('   kegg_db → settings   (1 document)');
        console.log('   kegg_db → promos     (6 promos)');
        console.log('   kegg_db → orders     (existing orders preserved)');
        console.log('   kegg_db → SIGN-UP    (existing users preserved)');

    } catch (err) {
        console.error('❌ Seed error:', err.message);
    } finally {
        await mongoose.disconnect();
        console.log('\n🔌 Disconnected from MongoDB');
    }
}

seedAll();
