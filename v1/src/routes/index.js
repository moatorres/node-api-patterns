const express = require('express')
const roteador = express.Router()
const userControl = require('../controllers/userController')
const roupaControl = require('../controllers/roupaController')

roteador
  .route('/user')
  .get(userControl.getUsers)
  .post(userControl.criarUsuario)
  .patch(userControl.atualizarUser)
  .delete(userControl.removerUser)

roteador
  .route('/roupa')
  .get(roupaControl.getRoupas)
  .post(roupaControl.criarRoupa)
  .patch(roupaControl.atualizarRoupa)
  .delete(roupaControl.removerRoupa)

module.exports = roteador
