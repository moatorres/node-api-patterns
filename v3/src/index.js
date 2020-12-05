import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import db from './db'
import { ambienteProd, nodeEnv } from './config'
import { RoupaController } from './services'

const app = express()

db.conectar()

app.use(express.json())
app.use(express.urlencoded({ extended: false, limit: 10 }))

if (!ambienteProd) {
  app.use(morgan('dev'))
}

app.all('/roupa', RoupaController)
app.get('/roupa/:id', RoupaController)

const porta = process.env.PORT || 3000
app.listen(porta, () => {
  console.log(
    `🗂  moka ${chalk.yellowBright(
      '::'
    )} servidor rodando em modo ${nodeEnv} http://localhost:${porta}`
  )
})

export default app
