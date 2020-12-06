import catchAsync from '../../helpers/catch-async'

const criarPatchController = ({ editarUser }) => {
  return async function patchController(httpRequest) {
    const { source = {}, ...userInfo } = httpRequest.body

    return await catchAsync(
      editarUser({
        ...userInfo,
        id: httpRequest.params.id,
      })
    )
  }
}

export default criarPatchController

// import httpError from '../../helpers/http-erro'
// import httpResponse from '../../helpers/http-resposta'
// export default function criarPatchController({ editarUser }) {
//   return async function patchController(httpRequest) {
//     try {
//       const { source = {}, ...userInfo } = httpRequest.body
//       source.ip = httpRequest.ip
//       source.browser = httpRequest.headers['User-Agent']
//       if (httpRequest.headers['Referer']) {
//         source.referrer = httpRequest.headers['Referer']
//       }
//       const seraEditado = {
//         ...userInfo,
//         id: httpRequest.params.id,
//       }
//       const atualizado = await editarUser(seraEditado)
//       return httpResponse({
//         statusCode: atualizado.sucesso ? 201 : 404,
//         payload: atualizado,
//       })
//     } catch (e) {
//       return httpError({
//         statusCode: e.name === 'RangeError' ? 404 : 400,
//         message: e.message,
//       })
//     }
//   }
// }
