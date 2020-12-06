import { addUser, editUser, listUsers, removeUser } from '../use-cases'
import criarDeleteUser from './delete-user'
import criarGetUsers from './get-users'
import criarPostUser from './post-user'
import criarPatchUser from './patch-user'
import notFound from './not-found'

const deleteUser = criarDeleteUser({ removeUser })
const getUsers = criarGetUsers({ listUsers })
const postUser = criarPostUser({ addUser })
const patchUser = criarPatchUser({ editUser })

const userController = Object.freeze({
  deleteUser,
  getUsers,
  notFound,
  postUser,
  patchUser,
})

export default userController
export { deleteUser, getUsers, notFound, postUser, patchUser }
