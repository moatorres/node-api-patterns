import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import userHandler from './user'
import notFound from './user/use-cases'
import handleRequest from './express-callback'

dotenv.config()

const apiRoot = process.env.API_URL
const app = express()

app.use(bodyParser.json())

app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})

app.use(`${apiRoot}/user`, userHandler)

app.use(handleRequest(notFound))

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando em ${apiRoot}`)
})

export default app
