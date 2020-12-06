import criarAddComent from './add-user'
import criarEditUser from './edit-user'
import criarRemoveUser from './remove-user'
import criarListUsers from './list-users'
import UserRepo from '../data-access'

const addUser = criarAddComent({ UserRepo })
const editUser = criarEditUser({ UserRepo })
const listUsers = criarListUsers({ UserRepo })
const removeUser = criarRemoveUser({ UserRepo })

const userService = Object.freeze({
  addUser,
  editUser,
  listUsers,
  removeUser,
})

export default userService
export { addUser, editUser, listUsers, removeUser }
