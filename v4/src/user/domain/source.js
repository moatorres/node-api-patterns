export default function criarGerarFonte({ isValidIp }) {
  return function gerarFonte({ ip, browser, referrer } = {}) {
    if (!ip) {
      throw new Error('IP não encontrado')
    }
    if (!isValidIp(ip)) {
      throw new RangeError('IP inválido')
    }
    return Object.freeze({
      getIp: () => ip,
      getBrowser: () => browser,
      getReferrer: () => referrer,
    })
  }
}
