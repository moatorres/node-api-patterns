'classeBasicaInjetada.js'

const livrariaExterna = require('lib-do-npm')
import livrariaExterna from 'lib-do-npm'

// CommonJS (direta)
module.exports = class MinhaClasseBasica {
  async metodoAsync() {
    return await livrariaExterna.get()
  }

  metodoSync() {
    return livrariaExterna.close()
  }
}

// ES7 (via construtor)
export default class MinhaClasseBasica {
  constructor(dependencia) {
    this.lib = dependencia
  }

  metodoAsync = async () => await this.lib.Metodo()
  metodoSync = () => this.lib.Metodo()
}
