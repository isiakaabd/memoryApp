import mongoose from 'mongoose'
import User from './userSchema.js'
const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    tags: { type: [String] },
    userId: {
      type: String,
    },

    image: {
      type: String,
      default: null, //change to image
    },
    likes: {
      type: Number,
      default: 0,
    },
    createdBy: { type: String },
  },

  { timeStamps: true },
)
const Post = mongoose.model('Posts', postSchema)

export default Post
