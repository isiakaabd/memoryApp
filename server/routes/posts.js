import express from 'express'
import {
  getPosts,
  createpost,
  editpost,
  deletepost,
  findPost,
  likePost,
} from '../controller/posts.js'
import { verifyToken } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/', verifyToken, getPosts)
router.post('/', verifyToken, createpost)
router.post('/:id', verifyToken, findPost)
router.patch('/:id', verifyToken, editpost)
router.delete('/:id', verifyToken, deletepost)
router.patch('/:id/like', verifyToken, likePost)

export default router
