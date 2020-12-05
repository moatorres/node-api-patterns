import mongoose from 'mongoose'

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

userSchema.index({ email: 1, unique: true }, { name: 'UserEmailIndex' })

userSchema.pre(/^find/, function (next) {
  this.inicio = Date.now()
  next()
})

userSchema.post(/^find/, function (docs, next) {
  console.log(`READ User ${Date.now() - this.inicio}ms`)
  next()
})

const User = Model('User', userSchema)

export default User
