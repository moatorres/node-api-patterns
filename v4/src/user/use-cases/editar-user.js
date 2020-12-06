import gerarUser from '../domain'

export default function criarEditarUseCase({ UserRepo }) {
  return async function editarUser({ id, ...updates } = {}) {
    if (!id) {
      throw new Error('Você deve informar uma ID')
    }

    const existente = await UserRepo.getPorId({ id: id })

    if (!existente.sucesso) {
      throw new RangeError('Usuário não encontrado')
    }

    const user = gerarUser({ ...existente, ...updates })

    // const validado = await handleModeration({ user })
    const validado = user

    const atualizado = await UserRepo.atualizar({
      id: id,
      nome: validado.getNome(),
      email: validado.getEmail(),
      senha: validado.getSenha(),
    })

    return {
      ...existente,
      ...atualizado,
    }
  }
}
