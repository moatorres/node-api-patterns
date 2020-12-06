import catchAsync from '../../helpers/catch-async'

const criarGetController = ({ getUsers }) => async (httpRequest) =>
  catchAsync(getUsers(httpRequest))

export default criarGetController

// REFACTOR 1
// Estrutura com resposta emitida/formatada dentro do repositório e do catchAsync
// import catchAsync from '../../helpers/catch-async'
// export default function criarGetController({ getUsers }) {
//   return async function getController(httpRequest) {
//     return catchAsync(getUsers(httpRequest))
//   }
// }
// const criarGetController = ({ getUsers }) => {
//   return async (httpRequest) => catchAsync(getUsers(httpRequest))
// }
// export default criarGetController

// REFACTOR 2
// Estrutura sem resposta formatada no repositório
// import catchAsync from '../../helpers/catch-async'
// import httpResponse from '../../helpers/http-resposta'
// export default function criarGetController({ getUsers }) {
//   return async function getController(httpRequest) {
//     const resultado = await catchAsync(getUsers(httpRequest))
//     const resposta = {
//       sucesso: !!resultado,
//       resultados: httpRequest.params.id ? 1 : resultado.length,
//       body: resultado,
//     }
//     return httpResponse({
//       statusCode: !!resposta ? 200 : 404,
//       payload: resposta,
//     })
//   }
// }
