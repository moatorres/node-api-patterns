const User = require('../models/userModel')
const gerarErro = require('../helpers/http-erro')

exports.getUsers = async (req, res, next) => {
  try {
    const users = User.find()
    const status = users.length ? 200 : 404
    const sucesso = status === 200 ? true : false

    res.status(status).json({
      sucesso: sucesso,
      resultados: users.length,
      body: users,
    })
  } catch (erro) {
    gerarErro(res, erro)
  }
}

exports.criarUsuario = async (req, res, next) => {
  try {
    const novoUsuario = {
      nome: 'Chico',
      email: 'chico@gmail.com',
      senha: '123123',
    }

    const user = await User.create(novoUsuario)
    const status = user.ok ? 200 : 404
    const sucesso = status === 200 ? true : false

    res.status(status).json({
      sucesso: sucesso,
      body: user,
    })
  } catch (erro) {
    gerarErro(res, erro)
  }
}

exports.getUserPorId = async (req, res, next) => {}
exports.removerUser = async (req, res, next) => {}
exports.atualizarUser = async (req, res, next) => {}
