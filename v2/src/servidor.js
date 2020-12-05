const mongoose = require('mongoose')
const config = require('./config')
const chalk = require('chalk')
const app = require('./app')

process.on('uncaughtException', (err) => {
  console.log(`❌ ${err.name}: ${err.message}`)
  process.exit(1)
})

mongoose
  .connect(config.mongoUri.replace('<PASSWORD>', config.mongoPass), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // inventar,
  })
  .then((res) =>
    console.log(
      `🗂  moka :: banco de dados conectado com ${chalk.greenBright('sucesso')}`
    )
  )

const porta = 5000 || config.porta

const servidor = app.listen(porta, () =>
  console.log(
    `🗂  moka :: app rodando em ${chalk.blue(`http://localhost:${porta}`)}`
  )
)

process.on('unhandledRejection', (err) => {
  console.log('❌' + err.name + ':' + err.message)
  servidor.close(() => {
    process.exit(1)
  })
})
