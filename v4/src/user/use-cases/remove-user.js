import gerarUser from '../domain'

export default function criarRemoveUser({ UserRepo }) {
  return async function removeUser({ id } = {}) {
    if (!id) {
      throw new Error('Você deve informar uma ID')
    }

    const userSeraDeletado = await UserRepo.findById({ id })

    if (!userSeraDeletado) {
      return naoDeletar()
    }

    if (await estaAtivo(userSeraDeletado)) {
      return softDelete(userSeraDeletado)
    }

    return hardDelete(userSeraDeletado)
  }

  async function estaAtivo({ id: userId }) {
    const userEncontrado = await UserRepo.findById({
      userId,
      ativosOnly: false,
    })
    return userEncontrado.ativo
  }

  function naoDeletar() {
    return {
      removidos: 0,
      softDelete: false,
      message: 'User não encontrado, nada a deletar.',
    }
  }

  async function softDelete(userInfo) {
    const userSeraDeletado = gerarUser(userInfo)

    userSeraDeletado.markDeleted()

    await UserRepo.update({
      id: userSeraDeletado.getId(),
      nome: userSeraDeletado.getNome(),
      email: userSeraDeletado.getEmail(),
      senha: userSeraDeletado.getHash(),
    })

    return {
      removidos: 1,
      softDelete: true,
      message: 'Usuário está ativo e foi softDeleted.',
    }
  }

  async function hardDelete(user) {
    await UserRepo.remove(user)

    return {
      removidos: 1,
      softDelete: false,
      message: 'Usuário deletado.',
    }
  }
}
