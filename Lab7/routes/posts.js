const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;

router.get('/:id', async (req, res) => {
  try {
    const post = await postData.getPostById(req.params.id);
    res.json(post);
  } catch (e) {
    res.status(404).json({error: 'Post not found'});
    return;
  }
});

router.get('/', async (req, res) => {
  try {
    const postList = await postData.getAllPosts();
    res.json(postList);
  } catch (e) {
    res.status(500).json({error: "we are here"});
  }
});

router.post('/', async (req, res) => {
  const blogPostData = req.body;
  if(!blogPostData || !blogPostData.title || !blogPostData.content || typeof blogPostData.title !=="string" || typeof blogPostData.content !== "string" || !blogPostData.author )
  {
    res.status(400).json({error : "Invalid Input"})
    return;
  }
  try {
    const {title, content, author} = blogPostData;
    const newPost = await postData.addPost(title, content, author);
    res.json(newPost);
  } catch (e) {
    res.status(500).json({error: e});
  }
});

router.put('/:id', async (req, res) => {
  const updatedData = req.body;

  if(!updatedData){
    res.status(400).json({error : "Invalid Input"});
    return;
  }

  try {
    await postData.getPostById(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'Post not found'});
    return;
  }

  try {
    const updatedPost = await postData.updatePost(req.params.id, updatedData);
    res.json(updatedPost);
  } catch (e) {
    res.status(500).json({error: e});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await postData.getPostById(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'Post not found'});
    return;
  }
  try {
    const post = await postData.removePost(req.params.id);
    res.json(post);
  } catch (e) {
    res.status(500).json({error: e});
  }
});

module.exports = router;
