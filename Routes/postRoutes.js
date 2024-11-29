const express = require('express');
const { getAllPosts, getPostById, createPost } = require('../controllers/postController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

// Get all posts
router.get('/myPost', getAllPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Create a new post (protected)
router.post('/create', authenticate, createPost);

module.exports = router;
