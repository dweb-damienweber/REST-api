// .env
require('dotenv').config();
const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL;

// Create API
const express = require('express')
const api = express();

// Body parser
api.use(express.json());

// Connect to DB
const mongoose = require('mongoose');
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

// Games routes
const gamesRouter = require('./routes/games');
api.use('/games', gamesRouter);

// Default route
api.get('*', (req, res) => {
    res.send();
});

api.listen(port, () => {
    console.log(`API up and running on port ${ port }`);
});