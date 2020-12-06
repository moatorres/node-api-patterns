import dotenv from 'dotenv'

dotenv.config()

export const nodeEnv = process.env.NODE_ENV
export const apiRoot = process.env.API_URL
export const uri = process.env.DB_URI
export const dbName = process.env.DB_NAME
export const senha = process.env.DB_PASS
