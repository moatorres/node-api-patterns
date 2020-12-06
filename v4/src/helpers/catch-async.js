import httpError from './http-erro'
import httpResponse from './http-resposta'

export default async function catchAsync(asyncFunction) {
  try {
    const resposta = await asyncFunction

    return httpResponse({
      statusCode: resposta.sucesso ? 201 : 404,
      payload: resposta,
    })

    // return await asyncFunction
  } catch (error) {
    // return erroHandler({ status: 400, erro: error.message })
    return httpError({
      statusCode: 400,
      message: error.message,
    })
  }
}

function erroHandler({ status, erro }) {
  return {
    status: status,
    erro: erro,
  }
}
