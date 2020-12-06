const roteador = require('express').Router()
const controle = require('./roupaController')

// www.site.com/roupas
roteador.route('/').get(controle.getRoupas).post(controle.adicionarRoupa)

roteador
  .route('/:id')
  .get(controle.getRoupaPorId)
  .post(controle.adicionarRoupa)
  .patch(controle.atualizarRoupa)
  .delete(controle.removerRoupa)

module.exports = roteador
