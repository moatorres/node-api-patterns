import crypto from 'crypto'
import criarGerarUser from './user'

const gerarUser = criarGerarUser({ md5, sanitizar })

function md5(info) {
  return crypto.createHash('md5').update(info, 'utf-8').digest('hex')
}

function sanitizar(info) {
  return info.trim()
}

export default gerarUser
