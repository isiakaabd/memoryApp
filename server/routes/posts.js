import express from 'express'
import { getPosts, createpost } from '../controller/posts.js'
const router = express.Router()

router.get('/', getPosts)
router.post('/', createpost)

export default router
