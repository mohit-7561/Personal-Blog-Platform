const Post = require('../models/Post');

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

// Get single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error });
  }
};

// Create a new post
const createPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.userId;  // Assuming `req.user` contains the authenticated user from the `authenticate` middleware
  
  try {
    const newPost = new Post({
      title,
      content,
      user: userId  // Assign the userId to the post
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};


module.exports = { getAllPosts, getPostById, createPost };
