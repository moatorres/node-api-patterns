export default function criarDeleteUser({ removeUser }) {
  return async function deleteUser(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const removido = await removeUser({ id: httpRequest.params.id })
      return {
        headers,
        statusCode: removido.removidoCount === 0 ? 404 : 200,
        body: { removido },
      }
    } catch (e) {
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      }
    }
  }
}
