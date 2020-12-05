export default function gerarRespostaHttp({ status, dados }) {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: status,
    data: JSON.stringify(dados),
  }
}
