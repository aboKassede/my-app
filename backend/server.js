const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

  // MongoDB connection
  mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/login', (req, res) => {
    // Handle login logic here
    res.send('Login endpoint');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
