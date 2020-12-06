import { criarDB } from '../src/data-access'
import dotenv from 'dotenv'

dotenv.config()
;(async function setupDb() {
  console.log('Configurando o banco de dados...')
  const db = await criarDB()
  const resultado = await db.collection('comments').createIndexes([
    { key: { hash: 1 }, name: 'hash_idx' },
    { key: { postId: -1 }, name: 'postId_idx' },
    { key: { replyToId: -1 }, name: 'replyToId_idx' },
  ])
  console.log(resultado)
  console.log('Configuração finalizada.')
  process.exit()
})()
