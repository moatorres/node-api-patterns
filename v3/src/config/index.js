import dotenv from 'dotenv'

dotenv.config()

export const mongoUri = process.env.MONGO_URI
export const mongoPass = process.env.MONGO_PASS
export const nodeEnv = process.env.NODE_ENV
export const apiPort = process.env.PORT
export const ambienteProd = process.env.NODE_ENV === 'production'
