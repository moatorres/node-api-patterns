import { adicionarUser, editarUser, getUsers, removerUser } from '../use-cases'
import criarDeleteController from './DELETE'
import criarGetController from './GET'
import criarPostController from './POST'
import criarPatchController from './PATCH'
import notFound from './404'

const getController = criarGetController({ getUsers })
const postController = criarPostController({ adicionarUser })
const patchController = criarPatchController({ editarUser })
const deleteController = criarDeleteController({ removerUser })

const userController = Object.freeze({
  getController,
  postController,
  patchController,
  deleteController,
  notFound,
})

export default userController
export {
  getController,
  postController,
  patchController,
  deleteController,
  notFound,
}
