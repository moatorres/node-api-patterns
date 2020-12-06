import gerarUser from '../domain'

export default function criarAddUser({ UserRepo }) {
  return async function addUser(userInfo) {
    const user = gerarUser(userInfo)

    const existente = await UserRepo.findByHash({ hash: user.getHash() })

    if (existente) {
      return existente
    }

    const valido = user

    return UserRepo.insert({
      nome: valido.getAuthor(),
      email: valido.getCreatedOn(),
      senha: valido.getHash(),
    })
  }
}
