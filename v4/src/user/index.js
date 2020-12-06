import express from 'express'
import controle from './controllers'
import handleRequest from '../express-callback'

const roteador = express.Router()

roteador
  .route('/')
  .get(handleRequest(controle.getUsers))
  .post(handleRequest(controle.postUser))
  .patch(handleRequest(controle.patchUser))
  .delete(handleRequest(controle.deleteUser))

roteador
  .route('/:id')
  .delete(handleRequest(controle.deleteUser))
  .patch(handleRequest(controle.patchUser))

roteador.use(handleRequest(controle.notFound))

export default roteador
