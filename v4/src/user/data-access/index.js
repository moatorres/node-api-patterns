import mongoose from 'mongoose'
import criarRepositorio from './repositorio'
import ConexaoDB from './db'
import User from '../domain/model'

const db = new ConexaoDB(mongoose)

db.conectar()

export async function handleConnection() {
  if (!db.status()) {
    await db.conectar()
  }
  return db.status()
}

const userRepo = criarRepositorio({ Model: User })

export default userRepo
