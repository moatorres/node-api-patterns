const roteador = require('express').Router()
const controle = require('./userController')

roteador.route('/').get(controle.getUsers).post(controle.adicionarUser)

roteador
  .route('/:id')
  .get(controle.getUserPorId)
  .patch(controle.atualizarUser)
  .delete(controle.removerUser)

module.exports = roteador
