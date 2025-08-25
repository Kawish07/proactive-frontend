require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoute = require('./routes/contactRoute');
const quoteRoutes = require('./routes/quote');

const app = express();
app.use(cors());
app.use(express.json());


// API routes
app.use('/api', contactRoute);
app.use('/api/quote', quoteRoutes);
app.use('/api', quoteRoutes); // Add this so /api/send-quote works

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
