export default function httpResponse({ statusCode, payload }) {
  return Object.freeze({
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: statusCode,
    body: JSON.stringify(payload),
  })
}
