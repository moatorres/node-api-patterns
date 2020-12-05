const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model

const userSchema = new Schema(
  {
    nome: String,
    email: String,
    senha: String,
  },
  {
    collection: 'users',
  }
)

const User = Model('User', userSchema)

module.exports = User
