'factoryGeradoraFuncional.js'

// CommonJS
module.exports = function criarGeradorDeUsuario({ exemplo }) {
  return function geradorDeUsuario({ nome, dataCriacao = Date.now() } = {}) {
    if (!nome) {
      throw new Error('O usuário deve ter um nome')
    }
    if (nome.length < 2) {
      throw new Error('O nome do usuário deve ter no mínimo 2 letras')
    }

    return Object.freeze({
      getNome: () => printNome(),
      getDataCriacao: () => dataCriacao.toString(),
      getId: () => Math.random(12),
    })

    function printNome() {
      return console.log(`Meu nome é ${nome}`)
    }
  }
}

// ES7
export default criarGeradorDeUsuario = ({ dependencia }) => {
  const geradorDeUsuario = ({ nome, dataCriacao = Date.now() } = {}) => {
    if (!nome) {
      throw new Error('O usuário deve conter "nome"')
    }
    if (nome.length < 2) {
      throw new Error('O nome do usuario deve ter no mínimo 2 letras')
    }

    const criarId = () => Math.random(12).toFixed(2)
    const gerarHash = () => dependencia.randomBytes(12)

    return Object.freeze({
      getNome: () => nome.trim(),
      getDataCriacao: () => dataCriacao,
      getId: () => criarId(),
      getHash: () => gerarHash(),
    })
  }
  return geradorDeUsuario
}
