import mongoose from 'mongoose'

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

roupaSchema.index({ sku: 1, unique: true }, { name: 'RoupaSKUIndex' })

roupaSchema.pre(/^find/, function (next) {
  this.inicio = Date.now()
  next()
})

roupaSchema.post(/^find/, function (docs, next) {
  console.log(`READ Roupa ${Date.now() - this.inicio}ms`)
  next()
})

const Roupa = Model('Roupa', roupaSchema)

export default Roupa
