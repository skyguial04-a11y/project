const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// MongoDB Connection String
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
    // Start your cPanel server once the database is ready
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server is running...');
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });