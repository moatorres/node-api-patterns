export default function criarRemoverUseCase({ UserRepo }) {
  return async function removerUser({ id } = {}) {
    if (!id) {
      throw new Error('Você deve informar uma ID')
    }

    const userExistente = await UserRepo.getPorId({ id: id })

    if (!userExistente) {
      return naoDeletar()
    }

    return hardDelete(id)
  }

  async function hardDelete(id) {
    return await UserRepo.remover({ id: id })
  }

  function naoDeletar() {
    return {
      sucesso: false,
      resultados: 0,
      mensagem: 'Usuário inválido ou não encontrado',
    }
  }
}
