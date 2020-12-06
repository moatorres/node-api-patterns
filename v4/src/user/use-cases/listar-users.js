export default function criarGetUseCase({ UserRepo }) {
  return async function getUsers(httpRequest) {
    const { id } = httpRequest.params || {}

    const resposta = id
      ? await UserRepo.getPorId({ id: id })
      : await UserRepo.listar()

    return resposta
  }
}
