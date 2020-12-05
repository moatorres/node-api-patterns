const express = require('express')
const app = express()
const limiteApi = require('express-rate-limit')
const hpp = require('hpp')
const helmet = require('helmet')
const xss = require('xss-clean')
const morgan = require('morgan')

const { UserEndpoint } = require('./services/User')
const { RoupaEndpoint } = require('./services/Roupa')

app.use(helmet())
app.use(helmet.hidePoweredBy())

app.use(express.json())
app.use(express.urlencoded({ extended: false, limit: 10 }))
app.use(hpp())
app.use(xss())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(
  limiteApi({
    max: 100,
    message:
      'Opa! Você excedeu o limite de solicitações. Tente novamente mais tarde.',
  })
)

app.use('/users', UserEndpoint)
app.use('/roupas', RoupaEndpoint)

app.all('*', (req, res, next) => {
  res.status(404).json('Página inválida ou não encontrada')
})

module.exports = app
