import crypto from 'crypto'
import ipRegex from 'ip-regex'
import sanitizeHtml from 'sanitize-html'
import criarGerarUser from './user'
import criarGerarFonte from './source'

const gerarFonte = criarGerarFonte({ isValidIp })
const gerarUser = criarGerarUser({ md5, sanitize, gerarFonte })

export default gerarUser

function isValidIp(ip) {
  return ipRegex({ exact: true }).test(ip)
}

function md5(info) {
  return crypto.createHash('md5').update(info, 'utf-8').digest('hex')
}

function sanitize(info) {
  return sanitizeHtml(info, {
    allowedIframeHostnames: ['hoxlux.com', 'growlab.digital'],
  })
}
