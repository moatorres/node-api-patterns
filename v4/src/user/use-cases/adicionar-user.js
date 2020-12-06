import gerarUser from '../domain'

export default function criarAdicionarUser({ UserRepo }) {
  return async function adicionarUser(userInfo) {
    const user = gerarUser(userInfo)

    const existente = await UserRepo.getPorEmail({ email: user.getEmail() })

    if (existente) {
      throw new Error('Este email já está sendo utilizado')
    }

    const valido = user

    return UserRepo.adicionar({
      nome: valido.getNome(),
      email: valido.getEmail(),
      senha: valido.getSenha(),
    })
  }
}
