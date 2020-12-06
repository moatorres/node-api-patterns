export default function criarListUsers({ UserRepo }) {
  return async function listUsers({}) {
    const users = await UserRepo.findAll()

    const usersAgrupados = agrupar(users)

    return usersAgrupados

    function agrupar(users) {
      return users
    }
  }
}
