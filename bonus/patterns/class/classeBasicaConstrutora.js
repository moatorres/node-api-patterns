'classeBasicaConstrutora.js'

// CommonJS
module.exports = class ClasseBasica {
  constructor(nome) {
    this.nome = nome
  }

  async funcaoAsync() {
    return await this.nome.toString()
  }

  funcaoSync() {
    return this.nome
  }
}

// ES7
export default class MinhaClasseBasica {
  constructor(nome) {
    this.nome = nome
  }

  metodoAsync = async () => await this.nome.toString()

  metodoSync = () => this.nome
}
