const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const indexRouter = require('./routes')

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: 10 }))

app.use(indexRouter)

const porta = 5000 || process.env.PORT

const db = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('🗂  moka :: Banco de dados conectado com sucesso'))

app.listen(porta, () => {
  console.log(`🗂  moka :: App rodando em http://localhost:${porta}`)
})
