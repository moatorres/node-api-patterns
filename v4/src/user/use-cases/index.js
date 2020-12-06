import criarAdicionarUseCase from './adicionar-user'
import criarEditarUseCase from './editar-user'
import criarRemoverUseCase from './remover-user'
import criarGetUseCase from './listar-users'
import UserRepo from '../data-access'

const adicionarUser = criarAdicionarUseCase({ UserRepo })
const editarUser = criarEditarUseCase({ UserRepo })
const getUsers = criarGetUseCase({ UserRepo })
const removerUser = criarRemoverUseCase({ UserRepo })

const userService = Object.freeze({
  adicionarUser,
  editarUser,
  getUsers,
  removerUser,
})

export default userService
export { adicionarUser, editarUser, getUsers, removerUser }
