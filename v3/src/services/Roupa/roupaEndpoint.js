import gerarErroHttp from '../../helpers/http-erro'
import gerarRespostaHttp from '../../helpers/http-resposta'
import makeRoupa from '../Roupa/roupaFactory'

export default function makeRoupaEndpoint({ RoupaRepo }) {
  return async function handle(httpRequest) {
    switch (httpRequest.method) {
      case 'GET':
        return getRoupa(httpRequest)
      case 'POST':
        return postRoupa(httpRequest)
      case 'DELETE':
        return deleteRoupa(httpRequest)

      default:
        return gerarErroHttp({
          statusCode: 429,
          mensagem: `Método inválido: ${httpReques.method}`,
        })
    }
  }

  async function getRoupa(httpRequest) {
    const { id } = httpRequest.pathParams || {}

    try {
      const resposta = id
        ? await RoupaRepo.getPorId({ roupaId: id })
        : await RoupaRepo.listar()

      return gerarRespostaHttp({ status: 200, dados: resposta })
    } catch (erro) {
      return gerarErroHttp({
        statusCode: 404,
        mensagem: erro.message,
      })
    }
  }

  async function postRoupa(httpRequest) {
    let roupaInfo = httpRequest.body

    if (!roupaInfo)
      gerarErroHttp({
        statusCode: 500,
        message: 'Ops! Alguém enviou um POST body vazio no roupaEndpoint.',
      })

    try {
      const roupa = makeRoupa({ roupaInfo })
      const resposta = await RoupaRepo.adicionar(roupa)

      return gerarRespostaHttp({ status: 200, dados: resposta })
    } catch (erro) {
      return gerarErroHttp({
        statusCode: 400,
        mensagem: erro.message,
      })
    }
  }

  async function deleteRoupa(httpRequest) {
    try {
      const resposta = await RoupaRepo.remover({ jobId: id })

      return gerarRespostaHttp({
        status: resposta.sucesso ? 201 : 404,
        dados: resposta,
      })
    } catch (erro) {
      return gerarErroHttp({
        statusCode: 400,
        mensagem: erro.message,
      })
    }
    const { id } = httpRequest.pathParams || {}

    return resposta
  }
}
