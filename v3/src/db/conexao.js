import chalk from 'chalk'
import { mongoUri, mongoPass } from '../config'

export default class ConexaoDB {
  constructor(driver) {
    this.driver = driver
    this.url = Object.freeze(mongoUri.replace('<PASSWORD>', mongoPass))
  }

  async conectar() {
    return await this.driver
      .connect(this.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() =>
        console.log(
          `🗂  moka ${chalk.yellowBright('::')} banco de dados conectado`
        )
      )
  }

  async desconectar() {
    return await this.driver
      .disconnect()
      .then(() =>
        console.log(
          `🗂  moka ${chalk.yellowBright('::')} banco de dados desconectado`
        )
      )
  }
}
