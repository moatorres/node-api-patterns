import { uri, senha, dbName } from '../../config'

const mongoUri = uri.replace('<PASSWORD>', senha).replace('<DB-NAME>', dbName)

export default class ConexaoDB {
  constructor(driver) {
    this.driver = driver
  }

  async conectar() {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      poolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }
    return await this.driver
      .connect(mongoUri, options)
      .then(() => console.log(`🗂  moka :: banco de dados conectado`))
  }

  async desconectar() {
    return await this.driver
      .disconnect()
      .then(() => console.log(`🗂  moka :: banco de dados desconectado`))
  }

  status() {
    return this.driver.connection.readyState
  }
}
