const User = require('./userModel')
const gerarErro = require('../../helpers/http-erro')
const catchAsync = require('../../helpers/catch-async')

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find()
  const status = users.length ? 200 : 404
  const sucesso = status === 200 ? true : false

  res.status(status).json({
    sucesso: sucesso,
    resultados: users.length,
    body: users,
  })
})

exports.getUserPorId = async (req, res, next) => {}
exports.adicionarUser = async (req, res, next) => {}
exports.atualizarUser = async (req, res, next) => {}
exports.removerUser = async (req, res, next) => {}
