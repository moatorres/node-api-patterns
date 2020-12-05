const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model

const vendedorSchema = new Schema({}, {})

const Vendedor = Model('Vendedor', vendedorSchema)

module.exports = Vendedor
