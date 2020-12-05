const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model

const roupaSchema = new Schema(
  {
    sku: String,
    fabricante: String,
    tamanho: String,
    estampa: String,
    emEstoque: Number,
    preco: Number,
  },
  {
    collection: 'roupas',
  }
)

const Roupa = Model('Roupa', roupaSchema)

module.exports = Roupa
