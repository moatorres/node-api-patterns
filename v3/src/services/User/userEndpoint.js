// import gerarErroHttp from '../../helpers/http-erro'
// import gerarRespostaHttp from '../../helpers/http-resposta'
// import makeUser from '../User/userFactory'

export default function makeUserEndpoint({ UserRepo }) {
  return async function handle(httpRequest) {
    switch (httpRequest.method) {
      case 'GET':
        break
      case 'POST':
        break
      case 'DELETE':
        break

      default:
        break
    }
  }

  async function getUser(httpRequest) {}

  async function postUser(httpRequest) {}

  async function deleteUser(httpRequest) {}
}
