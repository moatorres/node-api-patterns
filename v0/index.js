const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const roupaSchema = new mongoose.Schema({
  sku: String,
  fabricante: String,
  tamanho: String,
  estampa: String,
  emEstoque: Number,
  preco: Number,
})

const userSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
})

const User = mongoose.model('User', userSchema)
const Roupa = mongoose.model('Roupa', roupaSchema)

app.get('/user', async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

app.get('/roupa', async (req, res) => {
  const roupas = await Roupa.find()
  res.status(200).json(roupas)
})

mongoose
  .connect(
    'mongodb+srv://chico:chico123@chicocluster.w24wt.mongodb.net/moka-node-api?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => console.log('Banco conectado'))

app.listen(3000, () => console.log('API Rodando'))
