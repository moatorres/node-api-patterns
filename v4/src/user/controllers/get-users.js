export default function criarGetUsers({ listUsers }) {
  return async function getUsers(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const getUsers = await listUsers(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: getUsers,
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
