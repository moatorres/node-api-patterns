export default function criarPatchUser({ editUser }) {
  return async function patchUser(httpRequest) {
    try {
      const { nome, email, senha, ...userInfo } = httpRequest.body

      const seraEditado = {
        ...userInfo,
        id: httpRequest.params.id,
      }

      const atualizado = await editUser(seraEditado)

      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(atualizado.createdAt).toUTCString(),
        },
        statusCode: 200,
        body: { atualizado },
      }
    } catch (e) {
      if (e.name === 'RangeError') {
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 404,
          body: {
            error: e.message,
          },
        }
      }
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      }
    }
  }
}
