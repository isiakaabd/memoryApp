import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, minlength: 5, trim: true, required: true },
    token: { type: String },
    refreshToken: { type: String },
    image: String,
  },
  { timestamps: true },
)

const User = mongoose.model('users', UserSchema)

export default User
