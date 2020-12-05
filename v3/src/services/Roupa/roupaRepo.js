export default function makeRoupaRepo({ Roupa }) {
  const listar = async () => {
    const roupas = await Roupa.find()

    return {
      sucesso: true,
      resultados: roupas.length,
      data: roupas,
    }
  }

  const adicionar = async ({ ...roupa }) => {
    const roupaAdicionada = await Roupa.create(roupa)

    return {
      sucesso: !!roupaAdicionada._id,
      criado: roupaAdicionada,
    }
  }

  const getPorId = async ({ roupaId }) => {
    const roupaEncontrada = await Roupa.findOne({ _id: roupaId })

    return {
      sucesso: !!roupaEncontrada,
      resultados: roupaEncontrada ? 1 : 0,
      data: roupaEncontrada,
    }
  }

  const remover = async ({ roupaId }) => {
    const roupaRemovida = await Roupa.deleteOne({ _id: roupaId })

    return {
      sucesso: roupaRemovida.deletedCount ? true : false,
      removidos: roupaRemovida.deletedCount,
    }
  }

  return Object.freeze({ listar, adicionar, getPorId, remover })
}
