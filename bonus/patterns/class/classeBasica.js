'classeBasica.js'

// CommonJS
module.exports = class ClasseBasica {
  async funcaoAsync() {
    return {}
  }
  funcaoSync() {
    return {}
  }
}

// ES7
export default class MinhaClasseBasica {
  metodoAsync = async () => {}
  metodoSync = () => {}
}
