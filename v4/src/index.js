import express from 'express'
import { apiRoot } from './config'
import morgan from 'morgan'
import userHandler from './user'

const app = express()

app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use('/user', userHandler)

app.listen(process.env.PORT || 3000, () => {
  console.log(`🗂  moka :: servidor rodando em ${apiRoot}`)
})

export default app
