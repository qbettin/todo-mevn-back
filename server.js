require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const todoRoutes = require('./routes/todos.js');
const serverless = require('serverless-http'); // Import serverless-http

const app = express();
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors({
    origin: '*',  // Allow all origins for testing
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);  // Auth routes
app.use('/api/todos', todoRoutes); // Todos routes

// Example route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// MongoDB connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

mongoose.set('debug', true);

// Export the app wrapped in serverless-http for Vercel
module.exports.handler = serverless(app); // Export the handler for Vercel
