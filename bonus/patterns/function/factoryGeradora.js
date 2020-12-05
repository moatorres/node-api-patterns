'factoryGeradora.js'

// CommonJS
module.exports = function criarGeradorDeUsuario({ dependencias }) {
  return function gerarUsuario({ usuarioInfo } = {}) {
    if (!usuarioInfo) {
      throw new Error('usuarioInfo é obrigatório')
    }

    function validar({ nome, dataCriacao = Date.now(), ...info }) {
      if (!nome) {
        throw new Error('O usuário deve ter um nome')
      }
      if (nome.length < 2) {
        throw new Error('O nome do usuário deve ter no mínimo 2 letras')
      }
      return { nome, dataCriacao, ...info }
    }

    function normalizar({ nome, ...info }) {
      return {
        nome: nome.trim(),
        ...info,
      }
    }

    const usuarioValido = validar(usuarioInfo)
    const usuarioNormalizado = normalizar(usuarioValido)

    return Object.freeze(usuarioNormalizado)
  }
}

// ES7
export default criarGeradorDeObjeto = ({ driver }) => {
  const geradorDeObjeto = ({ objInfo } = {}) => {
    if (!objInfo) {
      throw new Error('Objeto deve conter "objInfo"')
    }

    const validar = ({ texto, dataCriacao = Date.now(), ...etc }) => {
      if (!texto) throw new Error('O objeto deve conter um texto')

      if (texto.length < 5)
        throw new Error('A texto do objeto deve ter no mínimo 5 letras')

      if (driver.censurar(texto))
        throw new Error('A texto do objeto possui conteúdo censurado')

      return { texto, dataCriacao, ...etc }
    }

    const normalizar = ({ texto, ...etc }) => {
      return { texto: texto.trim(), ...etc }
    }

    const objetoValido = validar(objInfo)
    const objetoNormalizado = normalizar(objetoValido)

    return Object.freeze(objetoNormalizado)
  }
  return geradorDeObjeto
}
