export default function gerarErroHttp({ statusCode, mensagem }) {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: statusCode,
    data: JSON.stringify({
      success: false,
      error: mensagem,
    }),
  }
}
