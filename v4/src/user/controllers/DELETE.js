import catchAsync from '../../helpers/catch-async'

const criarDeleteController = ({ removerUser }) => async (httpRequest) =>
  catchAsync(removerUser({ id: httpRequest.params.id }))

export default criarDeleteController

// import catchAsync from '../../helpers/catch-async'

// export default function criarDeleteController({ removerUser }) {
//   return async function deleteController(httpRequest) {
//     return catchAsync(removerUser({ id: httpRequest.params.id }))
//   }
// }
