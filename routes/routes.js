const express = require('express')
const router = express.Router()
const postController = require('../controllers/test')
const postLog = require('../controllers/user')
// const auth = require('../middleware/auth')

router.post('/',postController.createPost)
router.get('/:id',postController.getPostId)
router.get('/',postController.getAllPost)
router.delete('/:id',postController.deletePostId)
router.delete('/',postController.deleteAllPost)
router.put('/:id',postController.updatePostId)

router.get('/login',postLog.login)
router.post('/signup',postLog.signup)

module.exports = router