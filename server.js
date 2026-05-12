const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const { authMiddleware } = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());
// app.use('/',authMiddleware)

// routes
const authRoutes = require('./routes/authRoutes');
const common = require('./routes/common');
const upload = require('./routes/upload');


app.use('/api/user',authMiddleware,common);
app.use('/api/auth', authRoutes);
app.use('/api', upload);


// correct PORT
const PORT = process.env.PORT || 3000;

// connect DB
mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
  });