'estrutura.js'

// CommonJS #1 (sem dependência)
module.exports = function minhaFactory() {
  return { funcaoSync, funcaoAsync }
  function funcaoSync() {}
  async function funcaoAsync() {}
}

// ES7 #1 (sem dependência)
export default minhaFactory = () => {
  const funcaoSync = () => {}
  const funcaoAsync = async () => {}
  return { funcaoSync, funcaoAsync }
}

// CommonJS #2 (injected)
module.exports = function criarObjetoFuncional({ exemplo }) {
  return { funcaoSync, funcaoAsync }
  function funcaoSync() {
    return exemplo.get()
  }
  async function funcaoAsync() {
    return await exemplo.delete()
  }
}

// ES7 #2 (injected)
export default criarObjetoFuncional = ({ exemplo }) => {
  const funcaoSync = () => exemplo.get()
  const funcaoAsync = async () => exemplo.delete()
  return { funcaoSync, funcaoAsync }
}
