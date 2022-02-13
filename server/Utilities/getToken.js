import bcryptjs from 'bcryptjs'

export const getToken = (req) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    (req.headers.authorization && req.headers.authorization.split(' ')[1])
  return token
}

export const comparePassword = async (newPassword, userPassword) => {
  return await bcryptjs.compare(newPassword, userPassword)
}
export const encryptPassword = async (password) => {
  return await bcryptjs.hash(password, 10)
}
