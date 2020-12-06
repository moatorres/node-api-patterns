export default function httpError({ statusCode, message }) {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: statusCode,
    body: JSON.stringify({
      erro: message,
    }),
  }
}
