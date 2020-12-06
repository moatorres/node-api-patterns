import express from 'express'
import controle from './controllers'
import handleRequest from '../helpers/handleRequest'

const roteador = express.Router()

roteador
  .route('/')
  .get(handleRequest(controle.getController))
  .post(handleRequest(controle.postController))

roteador
  .route('/:id')
  .get(handleRequest(controle.getController))
  .delete(handleRequest(controle.deleteController))
  .patch(handleRequest(controle.patchController))

roteador.use(handleRequest(controle.notFound))

export default roteador
