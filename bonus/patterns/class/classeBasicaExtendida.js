'classeBasicaExtendida.js'

const ClasseBasica = require('./classeBasica') // CommonJS
import ClasseBasica from './classeBasica' // ES7

// #0 - Estrutura e sintaxe
class Extensao extends ClasseBasica {
  constructor() {
    super()
  }

  async funcaoClasseBasica() {
    return await super.funcaoAsync()
  }

  funcaoExtensao() {
    return exemplo.fazAlgumaCoisa()
  }
}

module.exports = Extensao

// #1 - Classe Básica
class Funcionario {
  constructor(nome, departamento) {
    this.nome = nome
    this.departamento = departamento
  }

  boasVindas() {
    return `Seja bem vindo ${this.nome}. Estamos felizes por tê-lo na equipe de ${this.departamento}.`
  }

  informarDepartamento() {
    return `${
      this.nome
    } trabalha no departamento de ${this.departamento.toLowerCase()}.`
  }
}

// #2 - Extensão da Classe Básica
class Gerente extends Funcionario {
  constructor(nome, departamento) {
    super(nome, departamento)
  }

  recebeuEmail() {
    return `${this.nome} recebeu um novo email`
  }

  meuDepartamento() {
    return super.informarDepartamento()
  }

  foiContratado() {
    return `${this.recebeuEmail()} com a mensagem "${super.boasVindas()}".`
  }
}

const gerente = new Gerente('Antônio', 'Vendas')

function logar(conteudo) {
  console.log(conteudo)
}

logar(gerente.foiContratado())
logar(gerente.meuDepartamento())
logar(gerente instanceof Funcionario) // true

module.exports = { Funcionario, Gerente }
