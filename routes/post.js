const express = require('express');

const postController = require('../controllers/post');
const commentController = require('../controllers/comment');
const router = express.Router();
router.get('/', postController.getIndex);

router.post('/addPost', postController.addPost);

router.post('/addComment', commentController.addComment);
router.get('/getComments/:id', commentController.getComments);

module.exports = router;


