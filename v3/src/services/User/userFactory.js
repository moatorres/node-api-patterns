// import campoObrigatorio from '../../helpers/campo-obrigatorio'

export default function makeUser({ userInfo }) {
  const userValido = validar(userInfo)
  const userNormalizado = normalizar(userValido)
  const userAprovado = aprovar(userNormalizado)

  function validar({}) {
    return {}
  }

  function normalizar({}) {
    return {}
  }

  function aprovar({}) {
    return {}
  }

  return Object.freeze(userAprovado)
}
