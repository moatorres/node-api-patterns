export default function criarRepositorio({ Model }) {
  const listar = async () => {
    const docs = await Model.find()

    return {
      sucesso: docs.length ? true : false,
      resultados: docs.length,
      body: docs,
    }
  }

  const adicionar = async ({ ...user }) => {
    const doc = await Model.create(user)

    return {
      sucesso: !!doc._id,
      criado: doc,
    }
  }

  const atualizar = async ({ id, ...info }) => {
    const doc = await Model.findOneAndUpdate(
      { _id: id },
      { $set: { ...info } },
      { new: true }
    )

    return {
      sucesso: !!doc._id,
      body: doc,
    }
  }

  const getPorId = async ({ id }) => {
    const doc = await Model.findOne({ _id: id })

    return {
      sucesso: !!doc,
      resultados: doc ? 1 : 0,
      body: doc,
    }
  }

  const getPorEmail = async ({ email }) => {
    return await Model.findOne({ email: email })
  }

  const remover = async ({ id }) => {
    const removido = await Model.deleteOne({ _id: id })

    return {
      sucesso: removido.deletedCount ? true : false,
      removidos: removido.deletedCount,
    }
  }

  return Object.freeze({
    listar,
    adicionar,
    atualizar,
    getPorId,
    getPorEmail,
    remover,
  })
}
