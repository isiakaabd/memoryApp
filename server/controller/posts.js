import Post from '../model/postsSchema.js'
import mongoose from 'mongoose'

export const getPosts = async (_, res) => {
  try {
    const postmessage = await Post.find()
    res.status(200).json(postmessage)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createpost = async (req, res) => {
  const posts = req.body
  try {
    const newPost = await Post.create(posts)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
