import gerarUser from '../domain'

export default function criarEditarUser({ UserRepo }) {
  return async function editarUser({ id, ...changes } = {}) {
    if (!id) {
      throw new Error('Você deve informar uma ID')
    }

    const existente = await UserRepo.findById({ id })

    if (!existente) {
      throw new RangeError('Usuário não encontrado')
    }

    const user = gerarUser({ ...existente, ...changes })

    // const validado = await handleModeration({ user })
    const validado = user

    const atualizado = await UserRepo.update({
      id: validado.getId(),
      nome: validado.getNome(),
      email: validado.getEmail(),
      ativo: validado.estaAtivo(),
    })

    return {
      ...existente,
      ...atualizado,
    }
  }
}
