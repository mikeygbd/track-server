const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(authRoutes)

const mongoUri = 'mongodb+srv://admin:jingel56@cluster0-czcf3.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo')
})

app.get('/', (req, res) => {
  res.send('Hi There')
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
