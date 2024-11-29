const jwt = require('jwt-simple');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (userId) => {
  const payload = { userId };
  return jwt.encode(payload, process.env.JWT_SECRET);
};

module.exports = { generateToken };
