
const express = require('express');
const mongoose = require('mongoose');
const route = require('./routers/route'); 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', route);
const mongoDBURL = 'mongodb://127.0.0.1:27017/brief';
// Connect to MongoDB
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
    }); 
app.listen(9000, () => {
    console.log('Server is running on port 7000');
});

