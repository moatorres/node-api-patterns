export default function criarMongoRepositorio({ Model }) {
  const listar = async () => {
    const registros = await Model.find()

    return {
      sucesso: true,
      resultados: registros.length,
      data: registros,
    }
  }

  const adicionar = async ({ ...info }) => {
    const novoRegistro = await Model.create(info)

    return {
      sucesso: !!novoRegistro._id,
      criado: novoRegistro,
    }
  }

  const getPorId = async ({ objId }) => {
    const registro = await Model.findOne({ _id: objId })

    return {
      sucesso: !!registro,
      resultados: registro ? 1 : 0,
      data: registro,
    }
  }

  const remover = async ({ objId }) => {
    const registroRemovido = await Model.deleteOne({ _id: objId })

    return {
      sucesso: registroRemovido.deletedCount ? true : false,
      removidos: registroRemovido.deletedCount,
    }
  }

  return Object.freeze({
    listar,
    adicionar,
    getPorId,
    remover,
  })
}
