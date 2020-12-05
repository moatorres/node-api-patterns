import User from './userModel'
import makeUserRepo from './userRepo'
import makeUserEndpoint from './userEndpoint'

const UserRepo = makeUserRepo({ User })
const UserEndpoint = makeUserEndpoint({ UserRepo })

export default UserEndpoint
export { default as UserController } from './userController'
