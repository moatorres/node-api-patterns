export default function criarPostUser({ addUser }) {
  return async function postUser(httpRequest) {
    try {
      const { nome, email, senha, ...userInfo } = httpRequest.body

      const posted = await addUser({
        ...userInfo,
        source,
      })

      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(posted.modifiedOn).toUTCString(),
        },
        statusCode: 201,
        body: { posted },
      }
    } catch (e) {
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
