export default async function notFound() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 404,
    body: {
      sucesso: false,
      mensagem: 'Bad Request. Método ou página inválidos.',
    },
  }
}
