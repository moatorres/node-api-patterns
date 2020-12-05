export default class MongoRepositorio {
  constructor(model) {
    this.Model = model
  }

  listar = async () => {
    const registros = await this.Model.find()

    return {
      sucesso: true,
      resultados: registros.length,
      data: registros,
    }
  }

  adicionar = async ({ ...info }) => {
    const novoRegistro = await this.Model.create(info)

    return {
      sucesso: !!novoRegistro._id,
      criado: novoRegistro,
    }
  }

  getPorId = async ({ objId }) => {
    const registro = await this.Model.findOne({ _id: objId })

    return {
      sucesso: !!registro,
      resultados: registro ? 1 : 0,
      data: registro,
    }
  }

  remover = async ({ objId }) => {
    const registroRemovido = await this.Model.deleteOne({ _id: objId })

    return {
      sucesso: registroRemovido.deletedCount ? true : false,
      removidos: registroRemovido.deletedCount,
    }
  }
}
