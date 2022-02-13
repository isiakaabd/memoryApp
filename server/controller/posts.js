import Post from '../model/postsSchema.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
  const { id } = req.user

  try {
    const postmessage = await Post.find({ userId: id })
    res.status(200).json(postmessage.reverse())
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createpost = async (req, res) => {
  const posts = req.body
  const { id } = req.user
  posts.userId = id

  try {
    const newPost = await Post.create(posts)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const editpost = async (req, res) => {
  const id = req.params.id
  const post = req.body
  try {
    const newPost = await Post.findByIdAndUpdate({ _id: id }, post, {
      new: true,
    })
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const deletepost = async (req, res) => {
  const id = req.params.id

  try {
    await Post.findByIdAndDelete({ _id: id })
    res.status(201).json({ message: 'Post successfully deleted' })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const findPost = async (req, res) => {
  const id = req.params.id

  try {
    const post = await Post.findOne({ _id: id })
    if (post) {
      res.status(201).json(post)
    } else res.status(400).json({ message: 'No post found' })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const likePost = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: 'no Post with this id' })
  const post = await Post.findById(id)
  const newPost = await Post.findByIdAndUpdate(
    id,
    { likes: post.likes + 1 },
    { new: true },
  )
  res.status(200).json(newPost)
}
