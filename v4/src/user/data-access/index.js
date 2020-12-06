const uri = process.env.DB_URI
const senha = process.env.DB_PASS
const dbName = process.env.DB_NAME

export default class ConexaoDB {
  constructor(driver) {
    this.driver = driver
    this.url = Object.freeze(
      uri.replace('<PASSWORD>', senha).replace('<DB-NAME>', dbName)
    )
  }

  async conectar() {
    return await this.driver
      .connect(this.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log(`🗂  moka :: banco de dados conectado`))
  }

  async desconectar() {
    return await this.driver
      .disconnect()
      .then(() => console.log(`🗂  moka :: banco de dados desconectado`))
  }
}
