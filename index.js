require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./auth.js');
const todoRoutes = require('./todos.js');
const serverless = require('serverless-http');

const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: '*',
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

// Example route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// MongoDB connection
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// mongoose.set('debug', true);

// Export the app wrapped in serverless-http for Vercel

app.listen(PORT, () => console.log(`Server running on ${PORT}, http://localhost:${PORT}`));
