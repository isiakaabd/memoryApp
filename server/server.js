import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './routes/posts.js'
import authrouter from './routes/user.js'

const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use('/', authrouter)
app.use('/post', router)
app.use('/', (_, res) => {
  res.send('<h2> Welcome to MEMORIES </h2>')
})
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
mongoose.connect(
  process.env.CONNECTIONURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('Error connecting to db: ', err.message)
    } else {
      app.listen(port, () => console.log(`server running on ${port}`))
    }
  },
)
