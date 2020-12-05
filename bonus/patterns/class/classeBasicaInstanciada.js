'classeBasicaInstanciada.js'

const livrariaExterna = require('lib-via-npm') // CommonJS
import livrariaExterna from 'lib-via-npm' // ES7

// CommonJS #1
module.exports = function criarInstanciaBasica() {
  class ClasseBasica {
    async funcaoAsync() {}
    funcaoSync() {}
  }
  return new ClasseBasica()
}

// ES7 #1
export default criarInstanciaBasicaES7 = () => {
  class MinhaClasseBasica {
    metodoAsync = async () => {}
    metodoSync = () => {}
  }
  return new MinhaClasseBasica()
}

// CommonJS #2 (direta)
module.exports = function criarInstanciaDireta() {
  class MinhaClasseBasica {
    async metodoAsync() {
      return await livrariaExterna.get()
    }
    metodoSync() {
      return livrariaExterna.delete()
    }
  }
  return new MinhaClasseBasica()
}

// ES7 #2 (direta)
export default criarInstanciaDiretaES7 = () => {
  class MinhaClasseBasica {
    metodoAsync = async () => await livrariaExterna.get()
    metodoSync = () => livrariaExterna.delete()
  }
  return new MinhaClasseBasica()
}

// CommonJS #3 (via construtor)
module.exports = function criarInstanciaConstruida() {
  class MinhaClasseBasica {
    constructor(dependencia) {
      this.lib = dependencia
    }

    async metodoAsync() {
      return await this.lib.Metodo()
    }
    metodoSync() {
      return this.lib.Metodo()
    }
  }
  return new MinhaClasseBasica(livrariaExterna)
}

// ES7 #3 (via construtor)
export default criarInstanciaConstruidaES7 = () => {
  class MinhaClasseBasica {
    constructor(dependencia) {
      this.lib = dependencia
    }

    metodoAsync = async () => await this.lib.Metodo()
    metodoSync = () => this.lib.Metodo()
  }
  return new MinhaClasseBasica(livrariaExterna)
}

// CommonJS #4 (injetada)
module.exports = function criarInstanciaInjetada({ livrariaExterna }) {
  class MinhaClasseBasica {
    constructor(dependencia) {
      this.lib = dependencia
    }

    async metodoAsync() {
      return await this.lib.getExemplo()
    }
    metodoSync() {
      return this.lib.fazAlgo()
    }
  }
  return new MinhaClasseBasica(livrariaExterna)
}

// ES7 #4 (injetada)
export default criarInstancia = ({ livrariaExterna }) => {
  class MinhaClasseBasica {
    constructor(dependencia) {
      this.lib = dependencia
    }

    metodoAsync = async () => await this.lib.getExemplo()
    metodoSync = () => this.lib.fazAlgo()
  }
  return new MinhaClasseBasica(livrariaExterna)
}
