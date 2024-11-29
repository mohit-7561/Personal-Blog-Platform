const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRouter = require('./Routes/posts');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Use the posts routes
app.use(postsRouter);

// Start server
app.listen(PORT, () => {
  console.log(__dirname);

  console.log(`Server is running on port ${PORT}`);
});
