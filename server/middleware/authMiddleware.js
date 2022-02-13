import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { getToken } from '../Utilities/getToken.js'

export const verifyToken = (req, res, next) => {
  const token = getToken(req)
  if (!token) {
    return res.status(403).send('authentication required')
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY)
    req.user = decoded
  } catch (err) {
    return res.status(401).send('Invalid Token')
  }
  return next()
}
