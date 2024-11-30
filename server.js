const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./Routes/postRoutes');
const authRoutes = require('./Routes/authRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();



app.use(cors({
  origin: ["https://delightful-malabi-007b4b.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
